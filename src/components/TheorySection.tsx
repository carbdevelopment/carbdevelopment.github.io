
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Eye, RotateCcw, Zap, Triangle, Square } from "lucide-react";

export const TheorySection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Teoria Simetriei Axiale
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Înțelege principiile fundamentale care stau la baza simetriei axiale
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              Definiția Simetriei Axiale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              <strong>Simetria axială</strong> (sau simetria față de o dreaptă)cunoscută și ca simetrie de rotație, 
              este proprietatea unui obiect sau a unei forme 
              de a se păstra identic atunci când este rotat în jurul unei axe.
            </p>


            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Notație matematică:</h4>
              <p className="text-indigo-800">
                Fie dreapta d și punctul A ∉ d. Punctul A&apos; se numește <strong>simetricul</strong> punctului A față de 
                dreapta d dacă AA&apos; ⊥ d, iar AM = A&apos;M. Punctele situate pe dreapta d se numesc 
                simetrice cu ele însăși față de această dreaptă.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-green-500" />
              Axa de Simetrie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              <strong>Axa de simetrie</strong> este dreapta față de care se realizează simetria. 
              Această dreaptă împarte planul în două părți și servește drept &quot;oglindă&quot; 
              pentru transformare.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Caracteristici:</h4>
              <ul className="text-green-800 space-y-1">
                <li>• Poate fi verticală, orizontală sau oblică</li>
                <li>• Orice punct de pe axă este propriul său corespondent</li>
                <li>• Distanța de la un punct la axă = distanța de la corespondent la axă</li>
                <li>• Perpendiculara din punct pe axă trece prin corespondent</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-purple-500" />
            Construirea Simetricului unui Punct
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-900 mb-3">Pașii de construcție:</h4>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Se trasează perpendiculara din punctul dat pe axa de simetrie</li>
                <li><strong>2.</strong> Se măsoară distanța de la punct la axa de simetrie</li>
                <li><strong>3.</strong> Se riportează aceeași distanță de partea cealaltă a axei</li>
                <li><strong>4.</strong> Punctul obținut este simetricul căutat</li>
              </ol>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Formula matematică:</h4>
              <p className="text-purple-800 mb-2">
                Dacă axa de simetrie este dreapta x = a, atunci:
              </p>
              <div className="bg-white p-3 rounded border font-mono text-center">
                A(x, y) → A&apos;(2a - x, y)
              </div>
              <p className="text-purple-700 text-sm mt-2">
                Coordonata y rămâne neschimbată, coordonata x se transformă.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Triangle className="w-5 h-5 text-red-500" />
            Teorema 3: Simetria axială este o izometrie
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Demonstrația teoremei:</h4>
              <p className="text-red-800 mb-2">
                Presupunem că simetria axială de axă d aplică punctele arbitrare A și P în A&apos; și respectiv P&apos;. 
                Să demonstrăm că AB = A&apos;B&apos;.
              </p>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• Dacă dreptele AB și sunt coplanare, atunci este evident că AB = A&apos;B&apos;</li>
                <li>• Presupunem că dreptele AB și sunt necoplanare și construim pe ca segmentele simetrice</li>
                <li>• Prin proprietățile simetriei, rezultă că triunghiurile dreptunghice sunt congruente</li>
                <li>• Prin congruența triunghiurilor, rezultă AB = A&apos;B&apos;</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Concluzie importantă:</h4>
              <p className="text-gray-700">
                Daca o simetrie axială Sa figura F&apos; este imaginea figurii F, atunci F&apos; ≅ Sa(F). 
                Dreapta d este o axă de simetrie a figurii F, dacă simetria axială de axă d aplică 
                această figură pe ea însăși, orice dreaptă care trece prin planul cercului sau este perpendiculară pe el este o axă 
                de simetrie a cercului.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      

      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            Exemple și Aplicații
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">În geometrie:</h4>
              <ul className="text-orange-800 space-y-1 text-sm">
                <li>• Construirea figurilor simetrice</li>
                <li>• Demonstrații de teoreme</li>
                <li>• Proprietăți ale figurilor regulate</li>
                <li>• Analiza formelor geometrice</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">În natură:</h4>
              <ul className="text-orange-800 space-y-1 text-sm">
                <li>• Frunzele plantelor</li>
                <li>• Corpul uman și al animalelor</li>
                <li>• Cristalele minerale</li>
                <li>• Florile și petalele</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">În artă și design:</h4>
              <ul className="text-orange-800 space-y-1 text-sm">
                <li>• Arhitectura clădirilor</li>
                <li>• Designul logo-urilor</li>
                <li>• Ornamentele decorative</li>
                <li>• Compoziții artistice</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-indigo-100 to-purple-100 border-none">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-center mb-4">Puncte Cheie de Reținut</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>• Simetria axială este o transformare care păstrează distanțele (izometrie)</p>
              <p>• Fiecare punct are un unic corespondent simetric</p>
              <p>• Axa de simetrie este mediatoarea segmentului care unește puncte corespondente</p>
              <p>• Transformarea spațiului prin simetria axială păstrează unghiurile și formele</p>
            </div>
            <div>
              <p>• Simetria compusă cu ea însăși dă identitatea</p>
              <p>• Două simetrii successive pot da o translație sau rotație</p>
              <p>• Simetria are aplicații vaste în matematică și științe</p>
              <p>• Dreptele invariante sunt axa de simetrie și dreptele perpendiculare pe aceasta</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
