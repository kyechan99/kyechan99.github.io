"use client";

import styled from "@emotion/styled";
import { IconCopy } from "@tabler/icons-react";
import { useRef } from "react";

export default function MDXCode({ children, className, title }: React.ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    const code = ref.current?.querySelector("code")?.innerText;
    if (!code) return;

    navigator.clipboard.writeText(code).then(
      () => {},
      err => {
        console.error("주소 복사 실패:", err);
      },
    );
  };

  return (
    <CodeBlock>
      <pre ref={ref} className={className}>
        {children}
      </pre>
      <CopyButton className="btn-copy" aria-label="copy-button" onClick={handleCopy}>
        <IconCopy />
      </CopyButton>
    </CodeBlock>
  );
}

const CodeBlock = styled.div`
  border-radius: 0.5rem;
  margin: 1rem 0rem;
  overflow: hidden;
  position: relative;
  pre {
    margin: 0px;
  }
  .rehype-code-title + & {
    margin-top: 0rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
  }
  &:hover {
    .btn-copy {
      display: block;
    }
  }
`;
const CopyButton = styled.button`
  display: none;
  position: absolute;
  cursor: pointer;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.deepGrey};
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
  }
`;
