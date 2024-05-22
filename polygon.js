const PI2 = Math.PI * 2;

const COLORS = [
    "#FF5733", // 붉은색 계열
    "#33FF57", // 녹색 계열
    "#3357FF", // 파란색 계열
    "#F1C40F", // 노란색 계열
    "#8E44AD", // 보라색 계열
    "#3498DB", // 하늘색 계열
    "#E74C3C", // 진한 붉은색
    "#2ECC71", // 밝은 녹색
    "#F39C12", // 주황색 계열
    "#1ABC9C", // 청록색
    "#D35400", // 진한 주황색
    "#16A085"  // 어두운 청록색
];

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }


    animate(ctx, moveX) {
        ctx.save();
        // ctx.fillStyle = '#000';
        //ctx.beginPath();

        const angle = PI2 / this.sides;
        const angle2 = PI2 / 4;

        ctx.translate(this.x, this.y);

        this.rotate += moveX * 0.008;
        ctx.rotate(this.rotate);

        for(let i = 0; i<this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

            ctx.save();
            ctx.fillStyle = COLORS[i];
            ctx.translate(x, y);
            ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
            ctx.beginPath();
            for (let j = 0; j < 4 ; j++) {
                const x2 = 160 * Math.cos(angle2 * j);
                const y2 = 160 * Math.sin(angle2 * j);
                (j==0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
            }
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }

        //ctx.fill();
        //ctx.closePath();
        ctx.restore();
    }
}