import { NextRequest, NextResponse } from 'next/server';

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel?: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';
}

interface ContributionsResponse {
  totalContributions: number;
  contributions: ContributionDay[];
}

// GitHub GraphQL query to get contributions
const GET_CONTRIBUTIONS_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Calculate date range (last year)
    const to = new Date();
    const from = new Date();
    from.setFullYear(from.getFullYear() - 1);

    // Use GitHub GraphQL API
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Note: For public data, we can use without token, but rate limits are stricter
        // For better rate limits, you can add: 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
      body: JSON.stringify({
        query: GET_CONTRIBUTIONS_QUERY,
        variables: {
          username,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
    });

    if (!response.ok) {
      // If GraphQL fails, try alternative approach using REST API
      return await getContributionsFromREST(username);
    }

    const data = await response.json();

    if (data.errors) {
      // If GraphQL returns errors, try REST API fallback
      return await getContributionsFromREST(username);
    }

    const contributions = data.data?.user?.contributionsCollection?.contributionCalendar;
    
    if (!contributions) {
      return await getContributionsFromREST(username);
    }

    // Helper function to determine contribution level
    const getContributionLevel = (count: number): ContributionDay['contributionLevel'] => {
      if (count === 0) return 'NONE';
      if (count <= 2) return 'FIRST_QUARTILE';
      if (count <= 4) return 'SECOND_QUARTILE';
      if (count <= 6) return 'THIRD_QUARTILE';
      return 'FOURTH_QUARTILE';
    };

    // Flatten the weeks array into a single array of days
    const contributionDays: ContributionDay[] = [];
    contributions.weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        contributionDays.push({
          date: day.date,
          contributionCount: day.contributionCount,
          contributionLevel: getContributionLevel(day.contributionCount),
        });
      });
    });

    return NextResponse.json({
      totalContributions: contributions.totalContributions,
      contributions: contributionDays,
    } as ContributionsResponse);
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}

// Fallback: Use REST API to get commit data and build contribution graph
async function getContributionsFromREST(username: string): Promise<NextResponse> {
  try {
    // Get user's public repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Optional: Add token for higher rate limits
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!reposResponse.ok) {
      return NextResponse.json(
        { error: 'User not found or unable to fetch repositories' },
        { status: 404 }
      );
    }

    const repos = await reposResponse.json();
    
    // Calculate date range
    const to = new Date();
    const from = new Date();
    from.setFullYear(from.getFullYear() - 1);

    // Build a map of dates to contribution counts
    const contributionMap = new Map<string, number>();
    let totalContributions = 0;

    // For each repository, get commits (limited to avoid rate limits)
    for (const repo of repos.slice(0, 10)) { // Limit to 10 repos to avoid rate limits
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?since=${from.toISOString()}&per_page=100`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        if (commitsResponse.ok) {
          const commits = await commitsResponse.json();
          commits.forEach((commit: any) => {
            const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
            contributionMap.set(date, (contributionMap.get(date) || 0) + 1);
            totalContributions++;
          });
        }
      } catch (err) {
        // Continue with next repo if one fails
        console.error(`Error fetching commits for ${repo.name}:`, err);
      }
    }

    // Helper function to determine contribution level
    const getContributionLevel = (count: number): ContributionDay['contributionLevel'] => {
      if (count === 0) return 'NONE';
      if (count <= 2) return 'FIRST_QUARTILE';
      if (count <= 4) return 'SECOND_QUARTILE';
      if (count <= 6) return 'THIRD_QUARTILE';
      return 'FOURTH_QUARTILE';
    };

    // Convert map to array
    const contributions: ContributionDay[] = [];
    contributionMap.forEach((count, date) => {
      contributions.push({ 
        date, 
        contributionCount: count,
        contributionLevel: getContributionLevel(count),
      });
    });

    // Sort by date
    contributions.sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json({
      totalContributions,
      contributions,
    } as ContributionsResponse);
  } catch (error) {
    console.error('Error in REST API fallback:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}

