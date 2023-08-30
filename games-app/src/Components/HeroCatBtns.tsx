function HeroCatBtns() {   
    setTimeout(() => {
        const sliderContainer = document.querySelector('.hero-right-col')
        const window = document.body
        let start:number;
        let end:number;
        let drag:boolean = false;
        let value:number;
        let pos:number[] = []; 
        let sum:number = 0;
        

        (sliderContainer as HTMLElement)?.addEventListener('mousedown', (e) => {
            start = e.clientX;
            drag = true;
        });
        (sliderContainer as HTMLElement)?.addEventListener('touchstart', (e) => {
            start = e.touches[0].clientX;
            drag = true;
        });

        (window as HTMLElement)?.addEventListener('mouseup', () => {
            pos.push(value);
            sum = pos.reduce((x, y) => {
                return x +  y
            })
            drag = false;
        });
        (window as HTMLElement)?.addEventListener('touchend', () => {
            pos.push(value);
            sum = pos.reduce((x, y) => {
                return x +  y
            })
            drag = false;
        });

        
        const slider = (start:number, end:number): void  => {
            if(!drag) return;
            value = end - start;
            if (value + sum > 0) {
                value = 0;
                sum = 0;
                pos = [];
            }
            
            let windowWidth:number = window.offsetWidth;

            console.log(value + sum, windowWidth - sliderContainer!.getBoundingClientRect().width)
            if ((value + sum) < (windowWidth - sliderContainer!.getBoundingClientRect().width)) return;
            (sliderContainer as HTMLElement).style.left = `${(sum) ? value + sum : value}px`
        };
        
        (window as HTMLElement)?.addEventListener('touchmove', (e) => {
            if(!drag) return;
            end = e.touches[0].clientX;
            slider(start, end);
        });
        (window as HTMLElement)?.addEventListener('mousemove', (e) => {
            if(!drag) return;
            end = e.clientX;
            slider(start, end);
        });
    }, 0); 
  return (
    <div className="hero-right-col">
        <button className="gradient-button contained width-92 no-align">Saved Games</button>
        <button className="gradient-button contained width-92 no-align">Browse</button>
        <button className="gradient-button contained width-92 no-align">Backlog</button>
        <button className="gradient-button contained width-92 no-align">Reviews</button>
        <button className="gradient-button contained width-92 no-align">Upload</button>
    </div>
  )
}

export default HeroCatBtns