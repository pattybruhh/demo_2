import {
  BellIcon,
  GridIcon,
  HomeIcon,
  MessageSquareIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { CoursesSection } from "./sections/CoursesSection";
import { SuggestedProjectsSection } from "./sections/SuggestedProjectsSection";

export const HomeNewUser = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[412px] relative flex flex-col">
      <header className="flex w-full h-[46px] items-center justify-between px-[19px] py-0 fixed top-0 left-0 bg-white z-50">
        <div className="font-medium text-[#333333] tracking-[0] leading-[normal] relative w-fit [font-family:'Roboto',Helvetica] text-xs whitespace-nowrap">
          11:07
        </div>

        <img
          className="relative flex-[0_0_auto]"
          alt="Icons"
          src="/icons.svg"
        />
      </header>

      <nav className="flex w-full items-center justify-between px-4 pt-[62px] pb-4 fixed top-0 left-0 bg-white z-40">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/frame-19.png" alt="Profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <div className="flex items-center justify-center gap-[15px]">
          <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
            <SearchIcon className="w-6 h-6" />
          </Button>

          <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
            <BellIcon className="w-6 h-6" />
          </Button>

          <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
            <MessageSquareIcon className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      <main className="flex-1 pt-[118px] pb-[48px]">
        <CoursesSection />
        <SuggestedProjectsSection />
      </main>

      <Button
        className="inline-flex items-center justify-center gap-2.5 p-4 fixed bottom-[60px] right-[19px] bg-[#01517d] hover:bg-[#013d5f] rounded-[34px] w-[62px] h-[62px]"
        size="icon"
      >
        <PlusIcon className="w-[30px] h-[30px] text-white" />
      </Button>

      <footer className="fixed w-full left-0 bottom-0 h-12 flex bg-colorsbackgroundslight z-40">
        <div className="flex-1 w-full flex items-center justify-center gap-[100px] px-8">
          <Button variant="ghost" size="icon" className="w-4 h-4 p-0">
            <HomeIcon className="w-3 h-3.5 text-wireframescolorssecondarygray" />
          </Button>

          <Button variant="ghost" size="icon" className="w-4 h-4 p-0">
            <GridIcon className="w-4 h-4 text-wireframescolorssecondarygray" />
          </Button>

          <Button variant="ghost" size="icon" className="w-4 h-4 p-0">
            <div className="w-3.5 h-3.5 bg-wireframescolorssecondarygray rounded-sm" />
          </Button>
        </div>
      </footer>
    </div>
  );
};
