import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Slide} from '../../../styles/theme/ThemeTemplate'
import Slide1 from '../../../assets/slide1.png'
import Slide2 from '../../../assets/slide2.png'
import Slide3 from '../../../assets/slide3.png'
import Slide4 from '../../../assets/slide4.png'
import {useHistory} from 'react-router-dom'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0)
    const history = useHistory()

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <Slide className='water'>
                <img src={Slide1} style={{opacity: 0.4}} />
            </Slide>
          <Carousel.Caption>
            <h3>Loja Água</h3>
            <p style={{cursor: 'pointer'}} onClick={()=> history.push('/water')}>Clique aqui para acessar</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Slide  className='fire'>
            <img src={Slide2} style={{opacity: 0.4}} />
          </Slide>
          <Carousel.Caption>
            <h3>Loja Fogo</h3>
            <p style={{cursor: 'pointer'}} onClick={()=> history.push('/fire')}>Clique aqui para acessar</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Slide  className='eletric'>
              <img src={Slide3} style={{opacity: 0.4}} />
          </Slide>
          <Carousel.Caption>
            <h3>Loja Elétrica</h3>
            <p style={{cursor: 'pointer'}} onClick={()=> history.push('/eletric')}>Clique aqui para acessar</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Slide  className='poison'>
              <div style={{position: 'absolute', bottom: 0}}>
                  <img src={Slide4} style={{opacity: 0.4}} />
              </div>

          </Slide>
          <Carousel.Caption>
            <h3>Loja Poção</h3>
            <p style={{cursor: 'pointer'}} onClick={()=> history.push('/poison')}>Clique aqui para acessar</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
}
  