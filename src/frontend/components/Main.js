import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'primereact/card'
import akita from '../imgs/akita.jpg'
import pug from '../imgs/pug.jpg'
import shih_tzu from '../imgs/shihtzu.jpg'

const Main = () => {
    const header1 = (
        <img alt="Card" src={akita} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );

    const header2 = (
        <img alt="Card" src={pug} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    )

    const header3 = (
        <img alt="Card" src={shih_tzu} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    )
    return (
        <nav>
            <header>
                <div>
                    <ol>
                        <li>Menu</li>
                        <li>Adote</li>
                    </ol>
                </div>
            </header>
            <main>
                <div className="container-slider">
                    <div style={{ textAlign:"center", paddingTop: "240px"}}>
                        <span className="dot" ></span>
                        <span className="dot" ></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="container-cards">
                    <Card title="Akita" subTitle="Cachorro" style={{ width: '20em' }} header={header1}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>Um cachorrinho da raça Akita tem o coração enorme e consegue deixar cada pedaço do seu dia perfeito.</p>
                    </Card>
                    <Card title="Pug" subTitle="Cachorro" style={{ width: '20em' }} header={header2}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>Além de brincalhão, molhará sua vida com a sua "saliva", digo, trará dias inesquecíveis para o se dono.</p>
                    </Card>
                    <Card title="Shih tzu" subTitle="Cachorro" style={{ width: '20em' }} header={header3}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>A bola de pelos, mais conhecida como o tapete de casa. Comerá todas as suas chinelas e sua comida. Extremamente fofo e companheiro.</p>
                    </Card>
                </div>  
            </main>
        </nav>
        
    )
}

export default Main
