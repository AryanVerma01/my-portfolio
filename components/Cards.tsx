import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import bitcoin from "../public/bitcoin.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import link from "../public/link.svg";
import Github from "../public/brand-github.svg";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import Techblocks from "./Techblocks";
import nextJS from "../public/nextJS.svg";
import LiveDot from "./LiveDot";

const Cards = () => {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Card className="h-130 p-0 overflow-hidden flex flex-col hover:-translate-y-2 delay-100 transition-all">
          <div className="relative bg-gray-600 h-50 w-full">
            <LiveDot/>
          </div>
          <CardContent className="flex-1 px-8 pt-0">
            <h2 className="font-semibold tracking-tight text-xl mb-4 flex justify-between items-center">
              <div>Title</div>
              <div className="flex gap-2 text-sm">
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Project Code</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Deployed site</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>
            </h2>
            <p className="text-neutral-400 text-sm leading-6 font-normal">
              comprehensive study platform with notes, flashcards, quizzes, AI
              chatbot, and interactive learning tools
            </p>
            <div className="mt-3">
              <div className="text-sm font-semibold text-neutral-300 tracking-tight">
                Technologies
              </div>
              <div className="mt-2">
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="h-130 p-0 overflow-hidden flex flex-col hover:-translate-y-2 delay-100 transition-all">
          <div className="bg-gray-600 h-50 w-full"></div>
          <CardContent className="flex-1 px-8 pt-0">
            <h2 className="font-semibold tracking-tight text-xl mb-4 flex justify-between items-center">
              <div>Title</div>
              <div className="flex gap-2 text-sm">
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Project Code</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Deployed site</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>
            </h2>
            <p className="text-neutral-400 text-sm leading-6 font-normal">
              comprehensive study platform with notes, flashcards, quizzes, AI
              chatbot, and interactive learning tools
            </p>
            <div className="mt-3">
              <div className="text-sm font-semibold text-neutral-300 tracking-tight">
                Technologies
              </div>
              <div className="mt-2">
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="h-130 p-0 overflow-hidden flex flex-col hover:-translate-y-2 delay-100 transition-all">
          <div className="bg-gray-600 h-50 w-full"></div>
          <CardContent className="flex-1 px-8 pt-0">
            <h2 className="font-semibold tracking-tight text-xl mb-4 flex justify-between items-center">
              <div>Title</div>
              <div className="flex gap-2 text-sm">
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Project Code</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Deployed site</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>
            </h2>
            <p className="text-neutral-400 text-sm leading-6 font-normal">
              comprehensive study platform with notes, flashcards, quizzes, AI
              chatbot, and interactive learning tools
            </p>
            <div className="mt-3">
              <div className="text-sm font-semibold text-neutral-300 tracking-tight">
                Technologies
              </div>
              <div className="mt-2">
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="h-130 p-0 overflow-hidden flex flex-col hover:-translate-y-2 delay-100 transition-all">
          <div className="bg-gray-600 h-50 w-full"></div>
          <CardContent className="flex-1 px-8 pt-0">
            <h2 className="font-semibold tracking-tight text-xl mb-4 flex justify-between items-center">
              <div>Title</div>
              <div className="flex gap-2 text-sm">
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Project Code</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href="/">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-white text-neutral-400 icon icon-tabler icons-tabler-outline icon-tabler-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-700 text-xs transition-all delay-10 text-white px-2 py-1 rounded-md mb-1">
                      <p>Deployed site</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>
            </h2>
            <p className="text-neutral-400 text-sm leading-6 font-normal">
              comprehensive study platform with notes, flashcards, quizzes, AI
              chatbot, and interactive learning tools
            </p>
            <div className="mt-3">
              <div className="text-sm font-semibold text-neutral-300 tracking-tight">
                Technologies
              </div>
              <div className="mt-2">
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
                <Techblocks className='m-1' src={nextJS}>NextJS</Techblocks>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default Cards;
