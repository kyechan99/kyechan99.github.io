import {
  IconBrandSafari,
  IconBulb,
  IconDeviceGamepad2,
  IconDots,
  IconLayoutDashboard,
  IconNote,
  IconPencil,
  IconSchool,
  TablerIconsProps,
} from "@tabler/icons-react";
import React from "react";

export type CategoryType = {
  name: string;
  icon: React.ReactNode;
};

export type CATEGORY = "post" | "project";

const iconMapping: Record<string, (props: TablerIconsProps) => JSX.Element> = {
  All: IconLayoutDashboard,
  Lib: IconBulb,
  Edu: IconSchool,
  Think: IconPencil,
  Memo: IconNote,
  Web: IconBrandSafari,
  Game: IconDeviceGamepad2,
  Etc: IconDots,
};

interface getCategoriesWithAllProps extends TablerIconsProps {
  type: CATEGORY;
}
export const getCategoriesWithAll = ({ type = "post", ...props }: getCategoriesWithAllProps): CategoryType[] =>
  ["All", ...(type === "post" ? POST_CATEGORY : PROJECT_CATEGORY)].map(category => ({
    name: category,
    icon: React.createElement(iconMapping[category], props),
  }));

/**********************************************************************
 *
 *                      블로그 포스팅 카테고리
 *
 **********************************************************************/
export const POST_CATEGORY = ["Lib", "Memo", "Think", "Etc"]; //! 새로운 카테고리를 만든다면 추가

/**********************************************************************
 *
 *                      포트폴리오 카테고리
 *
 **********************************************************************/
export const PROJECT_CATEGORY = ["Web", "Game"];
