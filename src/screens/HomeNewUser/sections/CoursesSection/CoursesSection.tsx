import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const tabsData = [
  { value: "job", label: "Job" },
  { value: "soft", label: "Soft" },
  { value: "team", label: "Team" },
];

export const CoursesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("job");

  return (
    <div className="flex w-full items-center">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="inline-flex h-8 items-center gap-[26px] bg-transparent p-0 border-b-0">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative h-[21px] px-0 pb-0 pt-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-0"
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={`font-label-large font-[number:var(--label-large-font-weight)] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] whitespace-nowrap [font-style:var(--label-large-font-style)] ${
                    activeTab === tab.value
                      ? "text-[#01517d]"
                      : "text-[#2c78a0]"
                  }`}
                >
                  {tab.label}
                </div>
                {activeTab === tab.value && (
                  <img
                    className="absolute top-[21px] left-0 w-full h-px object-cover"
                    alt="Line"
                    src="/line-12.svg"
                  />
                )}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
