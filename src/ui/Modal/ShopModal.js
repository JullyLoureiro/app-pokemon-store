import React from 'react'
import Slide from '@material-ui/core/Slide'
import {ModalBag} from '../../styles/theme/ThemeTemplate'

export default function AlertDialogSlide(props) {

  return (
      <div>
        {props.open && 
          <ModalBag>
            <div className="ModalShop">
                {props.chiildren}
            </div>
          </ModalBag>
        }
      </div>
     
   
  );
} 