import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'antd/dist/antd.css';
import { useState } from 'react';
import { BlackOutlineBtn, OutlineBtn, TestWarningOutlineBtn } from '../../styles';
export default function TestWarningModal(props) {
   // const [show, setShow] = useState(false);



   return (
      <div>

         <Modal aria-labelledby="example-modal-sizes-title-lg" size='lg' show={props.show} onHide={props.handleClose}>
            <Modal.Dialog>
               <Modal.Header id="example-modal-sizes-title-lg" closeButton>
                  <Modal.Title>Test qoidalari bilan tanishing</Modal.Title>
               </Modal.Header>

               <Modal.Body id="example-modal-sizes-title-lg">
                  <div className=''>
                     <p className='defaultP'>1. Har bir test savoli uchun sizga 15 sekund taqdim etiladi.</p>
                     <hr />
                     <p className="defaultP">2. Tanlagan variantingizni o'zgartirish mumkin emas</p>
                     <hr />
                     <p className="defaultP">3. Variant belgilash uchun berilgan 15 soniya tugashi bilan, variant belgilash imkoni yo'q.</p>
                     <hr />
                     <p className="defaultP">4. Tog'ri va noto'g'ri javoblar hisoblab boriladi, natija e'lon qilinadi.</p>
                  </div>
               </Modal.Body>

               <div className="d-flex gap-2 mt-5 mb-3">
                  <div>
                     <TestWarningOutlineBtn>
                        Chiqish
                     </TestWarningOutlineBtn>
                  </div>
                  <div>
                     <button className='searchButton'>
                        Boshlash
                     </button>
                  </div>
               </div>
            </Modal.Dialog>
         </Modal>

      </div>
   )
}
