
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveCanvas } from "@/components/InteractiveCanvas";
import { TheorySection } from "@/components/TheorySection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { ExercisesSection } from "@/components/ExercisesSection";
import { BookOpen, Eye, Calculator, Trophy, Pencil } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const navigationItems = [
    { id: "intro", label: "Introducere", icon: BookOpen },
    { id: "interactive", label: "Tabală Interactivă", icon: Pencil },
    { id: "theory", label: "Teorie", icon: Calculator },
    { id: "examples", label: "Exemple", icon: BookOpen },
    { id: "exercises", label: "Exerciții", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Simetria Axială</h1>
              <p className="text-sm text-gray-600">Proiect Matematică</p>
            </div>
            <nav className="hidden md:flex space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveSection(item.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon size={16} />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex overflow-x-auto space-x-2 pb-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon size={16} />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === "intro" && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simetria Axială - Proiect Introductiv
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorează conceptul fundamental al simetriei axiale prin demonstrații interactive,
                explicații clare și exemple practice din lumea reală.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection("interactive")}>
                <CardHeader className="text-center">
                  <Eye className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                  <CardTitle className="text-lg">Tablă Interactivă</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Desenează și observă simetria în timp real.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection("theory")}>
                <CardHeader className="text-center">
                  <Calculator className="w-12 h-12 mx-auto text-green-600 mb-2" />
                  <CardTitle className="text-lg">Teoria</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Înțelege principiile matematice fundamentale ale simetriei axiale.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection("examples")}>
                <CardHeader className="text-center">
                  <BookOpen className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Exemple</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Descoperă simetria în natură, artă și obiectele din jurul nostru.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection("exercises")}>
                <CardHeader className="text-center">
                  <Trophy className="w-12 h-12 mx-auto text-orange-600 mb-2" />
                  <CardTitle className="text-lg">Exerciții</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Testează-ți cunoștințele cu exerciții practice și interactive.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Rezumatul Lecției</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Concepte Fundamentale:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Definiția simetriei axiale</li>
                      <li>• Axa de simetrie și proprietățile sale</li>
                      <li>• Puncte corespondente în simetrie</li>
                      <li>• Distanțe și măsurători în simetrie</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <h4 className="font-semibold text-lg mb-3 ">Aplicații Practice:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Construirea figurii simetrice</li>
                      <li>• Identificarea axelor de simetrie</li>
                      <li>• Simetria în geometrie și algebră</li>
                      <li>• Exemple din viața reală</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "interactive" && (
          <div className="animate-fade-in">
            <InteractiveCanvas />
          </div>
        )}

        {activeSection === "theory" && (
          <div className="animate-fade-in">
            <TheorySection />
          </div>
        )}

        {activeSection === "examples" && (
          <div className="animate-fade-in">
            <ExamplesSection />
          </div>
        )}

        {activeSection === "exercises" && (
          <div className="animate-fade-in">
            <ExercisesSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-600">
            Proiect realizat pentru ora de matematică - Simetria Axială
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 - Toate drepturile rezervate
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
