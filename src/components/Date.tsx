"use client";

import styled from "@emotion/styled";
import { IconCalendar } from "@tabler/icons-react";
import { format, parseISO } from "date-fns";

export default function Date({ date }: { date: string }) {
  return (
    <DateStyled>
      <IconCalendar width={14} height={14} stroke={1.5} />
      <time dateTime={date} className="">
        {format(parseISO(date), "MM.dd, yyyy")}
      </time>
    </DateStyled>
  );
}
const DateStyled = styled.span`
  color: var(--black);
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.refer};
  font-weight: 400;
  align-items: center;
  gap: 0.5rem;
`;
