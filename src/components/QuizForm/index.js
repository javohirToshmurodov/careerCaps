import React from "react";
import ayol from "../../assets/images/quiz/qizcha.svg";
import erkak from "../../assets/images/quiz/yigitcha.svg";
import { QuizformWrapper } from "../../styles";
export default function QuizForm() {
  return (
    <>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h1 className="colorH1">Jinsingiz</h1>
          <QuizformWrapper>
            <div className="d-flex gap-2">
              <div className="d-flex borderr w-50 rounded py-2 px-2 bg-white align-items-center justify-content-between">
                <div className="d-flex gap-2">
                  <img src={erkak} alt="" />
                  <p className="m-0">Erkak</p>
                </div>
                <div className="">
                  <input
                    type="radio"
                    name="form"
                    className="form-check-input"
                  />
                </div>
              </div>
              <div className="d-flex borderr w-50 rounded py-2 px-2 bg-white align-items-center justify-content-between">
                <div className="d-flex gap-2">
                  <img src={ayol} alt="" />
                  <p className="m-0">Ayol</p>
                </div>
                <div className="">
                  <input
                    type="radio"
                    name="form"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
          </QuizformWrapper>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h1 className="colorH1">Ismingiz</h1>
          <QuizformWrapper>
            <input type="text" className="formInput" placeholder="Ismingiz" />
          </QuizformWrapper>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h1 className="colorH1">Yoshingiz</h1>
          <QuizformWrapper>
            <input type="text" className="formInput" placeholder="Yoshingiz" />
          </QuizformWrapper>
        </div>
      </div>
      
    </>
  );
}
