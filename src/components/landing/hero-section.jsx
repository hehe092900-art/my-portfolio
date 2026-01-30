import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * HeroSection 컴포넌트
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection({ className }) {
  return (
    <section
      className={cn(
        'min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20',
        className
      )}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hero Section
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
