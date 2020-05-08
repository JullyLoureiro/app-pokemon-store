import React from 'react'
import {Slide, Dialog, DialogTitle, DialogContentText, DialogContent} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  //Gera número aleatório para pedido
  function returnIdOrder(){
    const rand = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    return rand
  }

  return (
    <div>
      <Dialog open={props.open} TransitionComponent={Transition} keepMounted onClose={props.close} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
        <DialogTitle id="alert-dialog-slide-title">Compra finalizada com sucesso!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Nº do Pedido: #{returnIdOrder()}
            </DialogContentText>
          </DialogContent>
      </Dialog>
    </div>
  );
}