import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'
import { Announcement } from '@/components/ui/announcement'
import { FadeIn } from '@/components/ui/fade-in'
import { Icons, OpenAIIcon, TailwindCSSIcon } from '@/components/ui/icons'
import { PageActions, PageHeader } from '@/components/page-header'
import BgNoiseWrapper from '@/components/texture-wrapper'
import { GradientHeading } from '@/components/ui/gradient-heading'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div className=" isolate min-h-screen overflow-hidden bg-white bg-gradientTopRightLight pb-8 sm:pb-12 md:pb-0">
      <div className="container relative pt-12"></div>

      <BgNoiseWrapper url="/egg-shell-noise.png">
        <div className="container relative pt-12">
          <PageHeader>
            <FadeIn>
              <Announcement />
            </FadeIn>
            <FadeIn>
              <GradientHeading
                size="xl"
                weight="bold"
                className="text-center text-xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
              >
                Agents crafted for <br className="hidden md:block" /> Creative Builders
              </GradientHeading>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-1 text-center text-base  leading-3  text-foreground md:text-2xl md:font-normal md:leading-6">
                <span>Intelligent</span>
                <div className="hidden -rotate-45 rounded-full border border-black/10 p-1 shadow-lg md:block">
                  <OpenAIIcon className=" h-6 w-6   " aria-hidden="true" />
                </div>
                <span> assistants for your digital art.</span>

                <span>Zora compatible.</span>
                <div className="rounded-full border border-black/10 p-1 shadow-lg">
                  <Image
                    src="/images/zorb.png"
                    alt="zorb"
                    height={20}
                    width={20}
                    className="h-5 w-5"
                  />
                </div>
                <span>Styled with tailwindcss.</span>
                <div className="hidden -rotate-45 rounded-full border border-black/10 p-1 shadow-lg md:block ">
                  <TailwindCSSIcon className="h-6 w-6  " aria-hidden="true" />
                </div>
                <span className="">Copy and paste. Open Source. Based. </span>
                <div className="rounded-full border border-black/10 p-1 shadow-lg">
                  <Image
                    src="/images/base.png"
                    alt="base"
                    height={20}
                    width={20}
                    className="h-5 w-5"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <PageActions>
                <Link href="https://docs.myco.wtf" className={cn(buttonVariants())}>
                  Get Started
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/SweetmanTech/myco-landing-page"
                  className={cn(buttonVariants({ variant: 'outline' }))}
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </PageActions>
            </FadeIn>
          </PageHeader>
        </div>
      </BgNoiseWrapper>
    </div>
  )
}
IndexPage.theme = 'light'
