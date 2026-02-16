import React from "react";
import { Typography as AntTypography } from "antd";
import { cn } from "../../../helpers";

const { Title, Text, Paragraph } = AntTypography;

interface TypographyProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  type?: "secondary" | "success" | "warning" | "danger";
  className?: string;
}

export const Heading: React.FC<TypographyProps> = ({
  children,
  level = 1,
  type,
  className = "",
}) => {
  return (
    <Title level={level} type={type} className={className}>
      {children}
    </Title>
  );
};

export const TextComponent: React.FC<TypographyProps> = ({
  children,
  type,
  className = "",
}) => {
  return (
    <Text type={type} className={className}>
      {children}
    </Text>
  );
};

export const ParagraphComponent: React.FC<TypographyProps> = ({
  children,
  type,
  className = "",
}) => {
  return (
    <Paragraph type={type} className={className}>
      {children}
    </Paragraph>
  );
};

export function D1({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h1
        className={cn(
          "text-[52px] font-bold leading-13.5 xl:leading-[92.4px] tracking-wide",
          className,
        )}
      >
        {children}
      </h1>
      {/* DEFAULT nya di ganti ini ya, mengikuti di halaman compliance, kalo ada issue dihalaman lain nanti diskusi ya */}
      {/* <h1 className={cn("text-[52px] leading-[140%]", className)}>{children}</h1> */}
    </>
  );
}

export function H1({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={cn("text-[32px] leading-[150%]", className)}>{children}</h1>
  );
}

export function H3({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className={cn("text-[20px] leading-[150%]", className)}>{children}</h3>
  );
}

export function BodyTextLg({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-[18px] leading-[150%]", className)}>{children}</p>
  );
}
