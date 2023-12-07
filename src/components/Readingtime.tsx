"use client";

import styled from "@emotion/styled";
import { IconHourglassEmpty } from "@tabler/icons-react";
import { format, parseISO } from "date-fns";

export default function Readingtime({ readingTime }: { readingTime: string }) {
  return (
    <DateStyled>
      <IconHourglassEmpty width={14} height={14} stroke={1.5} />
      {readingTime}
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
