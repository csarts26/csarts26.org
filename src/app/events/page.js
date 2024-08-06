'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import yml from 'js-yaml-loader!../../../src/yml/carouselItems.yml';


function formatDate(dateString, short = false) {
    const date = new Date(`2020-${dateString}`); // Adding a year to create a valid date object
    const options = short ? { month: 'short', day: 'numeric' } : { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
function getFormattedDateRange(startDate, endDate) {
    if (endDate) {
        const formattedStartDate = formatDate(startDate, true);
        const formattedEndDate = formatDate(endDate, true);
        return `${formattedStartDate} - ${formattedEndDate}`;
    }
    return formatDate(startDate);
}


function renderLogo(logo, title) {
    if (logo) {
      return <img src={logo} alt={title} className="w-[500px] object-cover" />;
    }
    return <span className="text-5xl font-bold">{title}</span>;
  }


export default function EventsPage() {
    
    const plugin = React.useRef(
        Autoplay({ delay: 7000, playOnInit: true })
        )

    const events = Object.keys(yml).map(key => {
        const event = yml[key];
        return {
            key: event.key,
            host: event.host || "Class of '26",
            title: event.title,
            date: getFormattedDateRange(event.startDate, event.endDate),
            location: event.location,
            logo: event.logo,
            bg: event.bg,
            link: event.link || '',
            linkText: event.linkText || 'Learn More'
        };
    });

    return (
        <main className="w-screen h-full">
            <Carousel
                plugins={[plugin.current]}
                className="w-screen h-screen"
            >
                <CarouselContent className="w-full h-screen">

                    {events.map((event, index) => (
                        <CarouselItem key={index} className="w-full h-full">
                            <Card className="w-full h-full bg-center bg-black select-none" style={{ backgroundImage: `url(${event.bg})` }}>
                                <div className="absolute z-0 inset-0 bg-gradient-to-r from-black/50 to-transparent"/>
                                <CardContent className="relative z-10 flex flex-col gap-6 w-full h-full py-8 px-7 md:p-12 text-white">
                                    <p><span className="opacity-70 inline">Hosted by </span>{event.host}</p>
                                    {renderLogo(event.logo, event.title)}
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-2xl">{event.date}</p>
                                        <p className="text-xl">{event.location}</p>
                                    </div>
                                    <div className="h-full"/>
                                    {event.link && (
                                        <a 
                                        className="bg-black w-fit px-5 py-2 rounded-full cursor-pointer border border-white border-opacity-20"
                                        href={event.link}>
                                            {event.linkText}
                                        </a>
                                    )}
                                </CardContent>

                            </Card>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </main>
    )
}
