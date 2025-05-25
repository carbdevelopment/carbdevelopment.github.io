
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Pencil, Square, Circle, Minus } from "lucide-react";
import { toast } from "sonner";

export const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState<"draw" | "line" | "square" | "circle">("draw");
  const [symmetryAxisX, setSymmetryAxisX] = useState([300]);
  const [drawnPaths, setDrawnPaths] = useState<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    drawCanvas();
  }, [symmetryAxisX, drawnPaths]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 20) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += 20) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    // Draw symmetry axis
    const axisX = symmetryAxisX[0];
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(axisX, 0);
    ctx.lineTo(axisX, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw axis label
    ctx.fillStyle = "#ef4444";
    ctx.font = "14px Arial";
    ctx.fillText("Axa de simetrie", axisX + 5, 20);

    // Draw original shapes
    ctx.strokeStyle = "#3b82f6";
    ctx.fillStyle = "#3b82f6";
    ctx.lineWidth = 2;
    
    drawnPaths.forEach(path => {
      if (path.type === "draw") {
        ctx.beginPath();
        ctx.moveTo(path.points[0].x, path.points[0].y);
        path.points.forEach((point: {x: number, y: number}) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      } else if (path.type === "square") {
        ctx.strokeRect(path.x, path.y, path.width, path.height);
      } else if (path.type === "circle") {
        ctx.beginPath();
        ctx.arc(path.x, path.y, path.radius, 0, 2 * Math.PI);
        ctx.stroke();
      } else if (path.type === "line") {
        ctx.beginPath();
        ctx.moveTo(path.x1, path.y1);
        ctx.lineTo(path.x2, path.y2);
        ctx.stroke();
      }
    });

    // Draw symmetric shapes
    ctx.strokeStyle = "#10b981";
    ctx.fillStyle = "#10b981";
    ctx.globalAlpha = 0.7;
    
    drawnPaths.forEach(path => {
      if (path.type === "draw") {
        ctx.beginPath();
        const mirroredPoints = path.points.map((point: {x: number, y: number}) => ({
          x: 2 * axisX - point.x,
          y: point.y
        }));
        ctx.moveTo(mirroredPoints[0].x, mirroredPoints[0].y);
        mirroredPoints.forEach((point: {x: number, y: number}) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      } else if (path.type === "square") {
        const mirroredX = 2 * axisX - path.x - path.width;
        ctx.strokeRect(mirroredX, path.y, path.width, path.height);
      } else if (path.type === "circle") {
        const mirroredX = 2 * axisX - path.x;
        ctx.beginPath();
        ctx.arc(mirroredX, path.y, path.radius, 0, 2 * Math.PI);
        ctx.stroke();
      } else if (path.type === "line") {
        const mirroredX1 = 2 * axisX - path.x1;
        const mirroredX2 = 2 * axisX - path.x2;
        ctx.beginPath();
        ctx.moveTo(mirroredX1, path.y1);
        ctx.lineTo(mirroredX2, path.y2);
        ctx.stroke();
      }
    });

    ctx.globalAlpha = 1;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);

    if (currentTool === "draw") {
      const newPath = { type: "draw", points: [{ x, y }] };
      setDrawnPaths(prev => [...prev, newPath]);
    } else if (currentTool === "square") {
      const newSquare = { type: "square", x: x - 25, y: y - 25, width: 50, height: 50 };
      setDrawnPaths(prev => [...prev, newSquare]);
      setIsDrawing(false);
    } else if (currentTool === "circle") {
      const newCircle = { type: "circle", x, y, radius: 25 };
      setDrawnPaths(prev => [...prev, newCircle]);
      setIsDrawing(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || currentTool !== "draw") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setDrawnPaths(prev => {
      const newPaths = [...prev];
      const currentPath = newPaths[newPaths.length - 1];
      if (currentPath && currentPath.type === "draw") {
        currentPath.points.push({ x, y });
      }
      return newPaths;
    });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setDrawnPaths([]);
    toast("Canvas curățat!");
  };

  const addLine = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerY = canvas.height / 2;
    const startX = Math.random() * (canvas.width / 3);
    const endX = startX + 100;
    
    const newLine = { 
      type: "line", 
      x1: startX, 
      y1: centerY - 20, 
      x2: endX, 
      y2: centerY + 20 
    };
    setDrawnPaths(prev => [...prev, newLine]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pencil className="w-5 h-5" />
            Tablă Interactivă
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-4">
                <canvas
                  ref={canvasRef}
                  className="border border-gray-200 cursor-crosshair mx-auto block"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                />
              </div>
              
              <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <p><strong>Instrucțiuni:</strong></p>
                <p>• <span className="text-blue-600">Albastru</span> = forma originală</p>
                <p>• <span className="text-green-600">Verde</span> = forma simetrică</p>
                <p>• <span className="text-red-600">Roșu</span> = axa de simetrie</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Instrumente de desenare:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={currentTool === "draw" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentTool("draw")}
                    className="flex items-center gap-2"
                  >
                    <Pencil size={16} />
                    Desenează
                  </Button>
                  <Button
                    variant={currentTool === "square" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentTool("square")}
                    className="flex items-center gap-2"
                  >
                    <Square size={16} />
                    Pătrat
                  </Button>
                  <Button
                    variant={currentTool === "circle" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentTool("circle")}
                    className="flex items-center gap-2"
                  >
                    <Circle size={16} />
                    Cerc
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addLine}
                    className="flex items-center gap-2"
                  >
                    <Minus size={16} />
                    Linie
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Poziția axei de simetrie:</h4>
                <Slider
                  value={symmetryAxisX}
                  onValueChange={setSymmetryAxisX}
                  max={600}
                  min={50}
                  step={10}
                  className="mb-2"
                />
                <p className="text-sm text-gray-600">X = {symmetryAxisX[0]}px</p>
              </div>

              <Button
                variant="outline"
                onClick={clearCanvas}
                className="w-full flex items-center gap-2"
              >
                <RotateCcw size={16} />
                Curăță tot
              </Button>

              <div className="bg-yellow-50 p-3 rounded-lg text-sm">
                <p className="font-medium text-yellow-800 mb-2">💡 Încearcă să:</p>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Desenezi o literă în stânga</li>
                  <li>• Modifici poziția axei</li>
                  <li>• Adaugi forme geometrice</li>
                  <li>• Observi distanțele egale</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
