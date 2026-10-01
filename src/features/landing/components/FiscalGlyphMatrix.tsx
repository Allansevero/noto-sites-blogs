import { useEffect, useRef } from 'react';

interface FiscalGlyphMatrixProps {
  className?: string;
  color?: string;
  accentColor?: string;
}

// Tokens ricos em preços, %, alíquotas e números fiscais médicos
const FISCAL_TOKENS = [
  // Preços
  'R$ 450,00',
  'R$ 380,00',
  'R$ 500,00',
  'R$ 280,00',
  'R$ 650,00',
  'R$ 150,00',
  'R$ 520,00',
  'R$ 800,00',
  'R$ 1.200,00',
  'R$ 350,00',
  'R$ 420,00',
  'R$ 900,00',
  
  // Alíquotas e Porcentagens
  'ISS: 2,0%',
  'ALÍQ: 2,5%',
  'ALÍQ: 3,0%',
  'ISS: 5,0%',
  'IRRF: 1,5%',
  'PIS: 0,65%',
  'COFINS: 3%',
  'CSLL: 1,0%',
  'RET: 5,85%',
  'TAXA: 0,15',
  '2,0%',
  '2,5%',
  '5,0%',
  
  // Números e Códigos Fiscais
  'NF #2041',
  'NF #3892',
  'NF #4085',
  'NF #5190',
  'NFS-e #809',
  'NFS-e #124',
  'CÓD 04.01',
  'CÓD 14.01',
  'CBO 2251-25',
  'LOTE: 8901',
  'CRM 148.920',
  'CRM 204.311',
  
  // Termos de Emissão e Validação
  'NFS-e',
  'EMITIDA ✓',
  'PIX RECEBIDO',
  'XML VÁLIDO',
  'AUT-BCB ✓',
  'PREFEITURA ✓',
  'DANFE',
  'CONSULTA',
  'PACIENTE',
  'ENVIADA ✓'
];

export function FiscalGlyphMatrix({
  className = '',
  color = 'rgba(71, 85, 105, 0.42)',
  accentColor = '#006239',
}: FiscalGlyphMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const interval = 110;
    const mutationRate = 0.025;

    const cellWidth = 98; // Espaço para tokens completos como 'R$ 1.200,00'
    const cellHeight = 28;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    let cols = Math.floor(width / (cellWidth * window.devicePixelRatio));
    let rows = Math.floor(height / (cellHeight * window.devicePixelRatio));

    interface TokenCell {
      text: string;
      isAccent: boolean;
      opacity: number;
    }

    let grid: TokenCell[][] = [];

    const getRandomToken = () => {
      return FISCAL_TOKENS[Math.floor(Math.random() * FISCAL_TOKENS.length)];
    };

    const initGrid = () => {
      grid = [];
      for (let r = 0; r < rows; r++) {
        const row: TokenCell[] = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            text: getRandomToken(),
            isAccent: Math.random() < 0.07, // 7% de destaque verde
            opacity: Math.random() * 0.3 + 0.7,
          });
        }
        grid.push(row);
      }
    };

    initGrid();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      cols = Math.floor(width / (cellWidth * window.devicePixelRatio));
      rows = Math.floor(height / (cellHeight * window.devicePixelRatio));
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    const render = (time: number) => {
      if (time - lastTime >= interval) {
        lastTime = time;

        const effectiveCellW = cellWidth * window.devicePixelRatio;
        const effectiveCellH = cellHeight * window.devicePixelRatio;

        ctx.clearRect(0, 0, width, height);
        ctx.font = `600 ${Math.floor(12 * window.devicePixelRatio)}px "JetBrains Mono", "Source Code Pro", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Mutar tokens da grade
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cell = grid[r]?.[c];
            if (!cell) continue;

            if (Math.random() < mutationRate) {
              cell.text = getRandomToken();
              if (cell.isAccent && Math.random() < 0.2) {
                cell.isAccent = false;
              } else if (!cell.isAccent && Math.random() < 0.02) {
                cell.isAccent = true;
              }
            }

            ctx.save();
            if (cell.isAccent) {
              ctx.fillStyle = accentColor;
              ctx.globalAlpha = 0.95;
              ctx.shadowColor = 'rgba(0, 98, 57, 0.35)';
              ctx.shadowBlur = 4 * window.devicePixelRatio;
            } else {
              ctx.fillStyle = color;
              ctx.globalAlpha = 0.75;
            }

            const x = c * effectiveCellW + effectiveCellW / 2;
            const y = r * effectiveCellH + effectiveCellH / 2;
            ctx.fillText(cell.text, x, y);
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block pointer-events-none ${className}`}
    />
  );
}
