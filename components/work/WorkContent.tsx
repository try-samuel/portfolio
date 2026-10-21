"use client";

import { useState } from "react";
import { Grid, List } from "lucide-react";
import ListView from "@/components/work/ListView";
import GridView from "@/components/work/GridView";
import Footer from "@/components/common/Footer";
import { trackPortfolioEvent } from "@/lib/ferno";

export default function WorkContent() {
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
    const [filter, setFilter] = useState<'all' | 'design' | 'development'>('all');

    const chooseFilter = (nextFilter: typeof filter) => {
        if (nextFilter === filter) return;
        setFilter(nextFilter);
        trackPortfolioEvent('Work Filter Changed', { filter: nextFilter });
    };

    const chooseView = (nextView: typeof viewMode) => {
        if (nextView === viewMode) return;
        setViewMode(nextView);
        trackPortfolioEvent('Work View Changed', { view: nextView });
    };

    return (
        <main className="relative w-full bg-background text-foreground">
            {/* Header Section */}
            <section className="container mx-auto px-8 md:px-20 lg:px-40 py-20 md:py-32">
                <h1 className="text-5xl md:text-7xl font-normal mb-16 leading-tight">
                    Crafting High-performance <br /> digital solutions
                </h1>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-white/20">
                    {/* Filter Pills */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => chooseFilter('all')}
                            className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${filter === 'all'
                                ? 'bg-white text-black'
                                : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => chooseFilter('design')}
                            className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${filter === 'design'
                                ? 'bg-white text-black'
                                : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                                }`}
                        >
                            Design
                        </button>
                        <button
                            onClick={() => chooseFilter('development')}
                            className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${filter === 'development'
                                ? 'bg-white text-black'
                                : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                                }`}
                        >
                            Development
                        </button>
                    </div>

                    {/* View Toggle */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => chooseView('list')}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${viewMode === 'list'
                                ? 'bg-white text-black'
                                : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                                }`}
                            aria-label="List view"
                        >
                            <List size={20} />
                        </button>
                        <button
                            onClick={() => chooseView('grid')}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${viewMode === 'grid'
                                ? 'bg-white text-black'
                                : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                                }`}
                            aria-label="Grid view"
                        >
                            <Grid size={20} />
                        </button>
                    </div>
                </div>

                {/* Content Views */}
                {/* Mobile: Always Grid View */}
                <div className="md:hidden">
                    <GridView filter={filter} />
                </div>

                {/* Desktop: Toggleable View */}
                <div className="hidden md:block">
                    {viewMode === 'list' ? (
                        <ListView filter={filter} />
                    ) : (
                        <GridView filter={filter} />
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
