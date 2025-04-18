"use client";

import CategoryNav from "@/components/CategoryNav";
import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Breadcrumb from "@/components/Breadcrumb";

export default function Blog() {
  return (
    <main>
      <Breadcrumb title="Blog" />
      <Container className="bg-white dark-black py-5 mb-4">
        <div className="py-5">
          <CategoryNav />
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-5 mt-3">
            <div className="col">
              <Image src="/blog.png" alt="Blog" width={450} height={454} />
            </div>
            <div className="col">
              <Image src="/blog.png" alt="Blog" width={450} height={454} />
            </div>
            <div className="col">
              <Image src="/blog.png" alt="Blog" width={450} height={454} />
            </div>
            <div className="col">
              <Image src="/blog.png" alt="Blog" width={450} height={454} />
            </div>
            <div className="col">
              <Image src="/blog.png" alt="Blog" width={450} height={454} />
            </div>
            <div className="col">
              <Image src="/blog.png" alt="Blog" width={450} height={454} />
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
