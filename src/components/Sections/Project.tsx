"use client";
import { Card, CardContent } from "@/components/ui/card";
import { GridWrapper } from "@/components/Wrapper/GridWrapper";
import { ProjectProps } from "@/interfaces";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Project = (props: ProjectProps) => {
  const { theme } = useTheme();

  const buttonClass = {
    dark: "border-gray-600 hover:border-gray-400 hover:bg-gray-600",
    light: "border-gray-700 hover:border-gray-500 hover:bg-gray-200",
  };

  return (
    <section className="flex flex-col gap-4">
      <GridWrapper grid={6}>
        <Card className="p-4" mobile={6} tablet={3} desktop={3}>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl">{props.title}</h2>
            <div
              className={cn(
                "p-2 rounded-full transition-all duration-200 hover:shadow-md",
                buttonClass[(theme as unknown as "dark" | "light") || "dark"]
              )}
            >
              <Link href={props.link} target="_blank">
                <MoveUpRight className="2xl" />
              </Link>
            </div>
          </div>
          <p className="font-light text-2xl">{props.time}</p>
        </Card>
        <Card className="p-4" mobile={4} tablet={2} desktop={2}>
          {props.description}
        </Card>
        <Card className="p-4" mobile={2} tablet={1} desktop={1}>
          {props.skills.map((skill, index) => {
            return <li key={index}>{skill.name}</li>;
          })}
        </Card>
      </GridWrapper>
      <div className="col-span-10 mb-10">
        <Swiper
          slidesPerView="auto"
          spaceBetween={7}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1.1,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 1.1,
          //     spaceBetween: 40,
          //   },
          //   1024: {
          //     slidesPerView: 1.1,
          //     spaceBetween: 50,
          //   },
          // }}
          className=""
        >
          {props.images.map((image, index) => {
            return (
              <div key={index}>
                <SwiperSlide
                  className="hover:cursor-grab active:cursor-grabbing !flex items-start"
                  key={index}
                >
                  <img
                    src={image.src}
                    alt="None"
                    className="!object-contain object-top"
                    style={{ maxHeight: "500px" }}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
