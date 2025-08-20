"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";


interface MitreTechniquesSelectorProps {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  mitreTechniques: { category: string; techniques: string[] }[];
  lockedTechniques?: string[];
}

export default function MitreTechniquesSelector({ selected, setSelected, mitreTechniques = [], lockedTechniques = [] }: MitreTechniquesSelectorProps) {
  if (!mitreTechniques || !Array.isArray(mitreTechniques)) return null;

    const toggleTechnique = (technique: string) => {
      if (lockedTechniques?.includes(technique)) return; // Prevent toggling off locked techniques
    setSelected((prev) =>
      prev.includes(technique)
        ? prev.filter((t) => t !== technique)
        : [...prev, technique]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {mitreTechniques.map((category) => (
        <section key={category.category} className="">
          <h3 className="font-bold mb-4 text-lg text-blue-700 text-center">{category.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.techniques.map((technique) => {
              const isSelected = selected.includes(technique);
              const isLocked = lockedTechniques.includes(technique);
              return (
                <Card
                  key={technique}
                  className={`p-3 text-sm shadow cursor-pointer transition-colors ${isSelected ? "bg-green-100 border-green-400" : "bg-white"} ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
                  onClick={() => toggleTechnique(technique)}
                >
                  {technique}
                </Card>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
