
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Home, Palette, Bug } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ExamplesSection = () => {
  const naturalExamples = [
    {
      title: "Fluturi",
      description: "Aripile fluturelui prezintă simetrie perfectă față de axa corpului.",
      icon: Bug,
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      title: "Frunze",
      description: "Majoritatea frunzelor au nervura centrală ca axă de simetrie.",
      icon: Flower,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Corpul uman",
      description: "Fața și corpul uman prezintă simetrie bilaterală aproape perfectă.",
      icon: Palette,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const geometricExamples = [
    {
      shape: "Triunghi isoscel",
      description: "Are o axă de simetrie care trece prin vârful din față și mijlocul bazei.",
      axes: 1
    },
    {
      shape: "Pătrat",
      description: "Are 4 axe de simetrie: 2 diagonale și 2 mediatoare ale laturilor.",
      axes: 4
    },
    {
      shape: "Dreptunghi",
      description: "Are 2 axe de simetrie care sunt mediatoarelor laturilor opuse.",
      axes: 2
    },
    {
      shape: "Cerc",
      description: "Are infinite axe de simetrie care trec prin centru.",
      axes: "∞"
    },
    {
      shape: "Romb",
      description: "Are 2 axe de simetrie care sunt diagonalele sale.",
      axes: 2
    },
    {
      shape: "Hexagon regulat",
      description: "Are 6 axe de simetrie: 3 prin vârfuri opuse și 3 prin mijlocul laturilor.",
      axes: 6
    }
  ];

  const realWorldExamples = [
    {
      category: "Arhitectură",
      examples: [
        "Fațadele catedralelor gotice",
        "Palatul Versailles",
        "Taj Mahal din India",
        "Clădiri neoclasice"
      ],
      icon: Home,
      color: "text-purple-600"
    },
    {
      category: "Design și Arte",
      examples: [
        "Logo-uri de companii",
        "Mandale decorative",
        "Vitralii de biserică",
        "Tapiserii orientale"
      ],
      icon: Palette,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Exemple de Simetrie Axială
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descoperă cum simetria axială se manifestă în natură, geometrie și creațiile umane
        </p>
      </div>

      {/* Natural Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-center">🌿 Simetria în Natură</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {naturalExamples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${example.bgColor} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-8 h-8 ${example.color}`} />
                  </div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{example.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <Card className="mt-6 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-green-900 mb-3">🔍 Observații interesante:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-green-800">
              <div>
                <p>• <strong>Avantaj evolutiv:</strong> Simetria în natură oferă echilibru și eficiență în mișcare</p>
                <p>• <strong>Percepția umană:</strong> Creierul nostru recunoaște rapid formele simetrice</p>
              </div>
              <div>
                <p>• <strong>Matematica naturii:</strong> Simetria apare natural din procesele de creștere</p>
                <p>• <strong>Variații:</strong> Simetria perfectă este rară - există întotdeauna mici variații</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Geometric Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-center">📐 Figuri Geometrice Simetrice</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {geometricExamples.map((example, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{example.shape}</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {example.axes} {example.axes === 1 ? 'axă' : 'axe'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-blue-900 mb-3">📊 Relația dintre simetrie și regularitate:</h4>
            <p className="text-blue-800 mb-3">
              Cu cât o figură este mai regulată, cu atât mai multe axe de simetrie are. 
              Cercul, fiind cea mai regulată figură, are infinite axe de simetrie.
            </p>
            <div className="bg-white p-3 rounded border">
              <strong>Regulă generală:</strong> Un poligon regulat cu n laturi are n axe de simetrie.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Real World Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-center">🏛️ Simetria în Creațiile Umane</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {realWorldExamples.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      
    </div>
  );
};
