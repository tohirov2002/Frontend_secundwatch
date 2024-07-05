import React from 'react';
import "./assets/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// class App extends React.Component{
   
//   state={
//     hour: 0,
//     minut: 0,
//     secund: 0,
//     btn_disabled: false,
//     interval: "",
//     savearr : []
//   }
//  startWach=()=> {
//   let i = setInterval(() => {
//       const {hour,minut,secund} = this.state
//       if(secund === 59) {
//         if(minut === 59) {
//           this.setState({
//             hour: hour + 1,
//             minut: 0,
//             secund: 0
//           }) 
//         }else{
//           this.setState({
//             minut: minut + 1,
//             secund: 0
//           })
//         }
//       } else{
//         this.setState({
//           secund: secund + 1
//        })
//       }
//     }, 1);
//     this.setState({
//       btn_disabled: true,
//       interval: i
//     })
//  }
// stopWach=()=> {
//     clearInterval(this.state.interval)
//     this.setState({
//       btn_disabled: false
//     })
// }
// saveInterval=()=> {
//   const {hour,minut,secund,savearr} = this.state
//   savearr.push(hour+":"+minut+":"+secund)
//   this.setState({
//     savearr:savearr
//   })
// }
// deleteInterval=()=> {
//   const {hour,minut,secund,savearr,btn_disabled} = this.state
//   clearInterval(this.state.interval)
//   this.setState({
//     hour: 0,
//     minut: 0,
//     secund: 0,
//     savearr: [],
//     btn_disabled: false
//   })
// }
//   render() {
//     const {hour,minut,secund,btn_disabled,savearr} = this.state
//     return(
//       <>
//        <div className="container">
//         <div className="row">
//          <div className="col-md-6 offset-3">
//           <div className="card text-center mt-5 d-flex ">
//             <div className="card-header text-center">
//               <h1>Secondwatch</h1>
//             </div>
//             <div className="card-body">
//                 <h2>{hour}:{minut}:{secund}</h2>
//             </div>
//             <div className="card-footer">
//               <div className="row mt-3 mb-3">
//                 <div className="col-md-3">
//               <button disabled={btn_disabled} onClick={this.startWach} className='btn btn-info text-center text-center'>start</button>
//                 </div>
//                 <div className='col-md-3'>
//               <button onClick={this.stopWach} className='btn btn-warning text-center'>stop</button>
//                 </div>
//                 <div className="col-md-3">
//               <button onClick={this.saveInterval} className='btn btn-success text-center'>interval</button>
//                 </div>
//                 <div className="col-md-3">
//               <button onClick={this.deleteInterval} className='btn btn-danger text-center'>delete</button>
//                 </div>
//               </div>
//               <div className="row mt-4">
//                 {
//                   savearr.map((item,index) => {
//                      return <div>
//                       <h2 key={index}>{item}</h2>
//                      </div>
//                   })
//                 }
//               </div>
//             </div>
//           </div>
//          </div>
//         </div>
//        </div>
//       </>
//     )
//   }
// }

class App extends React.Component{
  state={
    hour: 0,
    minut: 0,
    secund: 0,
    btn_disabled: false,
    interval: "",
    intervalarr: []
  }
  startBtn=()=> {
  let i = setInterval(() => {
      const {hour,minut,secund} = this.state
      if(secund === 59) {
        if(minut === 59) {
          this.setState({
            hour: hour + 1,
            minut: 0,
            secund: 0
          })
        } else{
          this.setState({
          minut: minut +1,
          secund: 0
          })
        }
      } else{
        this.setState({
          secund: this.state.secund + 1
        })
      }
      this.setState({
        interval: i,
        btn_disabled: true
      })
    }, 1000);
  }
  stopBtn=()=> {
    clearInterval(this.state.interval)
    this.setState({
      btn_disabled: false
    })
  }
  saveInterval=()=> {
    const {hour,minut,secund,intervalarr} = this.state
    intervalarr.push(hour+":"+minut+":"+secund)
    this.setState({
      intervalarr: intervalarr
    })
  }
  deleteBtn=()=>{
      const {hour,minut,secund,intervalarr} = this.state
      clearTimeout(this.state.interval)
      this.setState({
        hour: 0,
        minut: 0,
        secund: 0,
        intervalarr: []
      })
      this.setState({
        btn_disabled: false
      })
  }
  render() {
    const {hour,minut,secund,btn_disabled,intervalarr} = this.state
    return(
      <>
        <div className="container">
          <div className="col-md-6 offset-3">
            <div className="card mt-5 ">
              <div className="card-header text-center">
                <h1>SecundWatch</h1>
              </div>
              <div className="card-body text-center">
                <h2>{hour}:{minut}:{secund}</h2>
              </div>
              <div className="card-footer text-center pt-3 pb-3">
                <div className="row">
                  <div className="col-md-3">
                    <button disabled={btn_disabled} onClick={this.startBtn} className='btn btn-info'>start</button>
                  </div>
                  <div className="col-md-3">
                    <button onClick={this.stopBtn} className='btn btn-warning'>stop</button>
                  </div>
                  <div className="col-md-3">
                    <button onClick={this.saveInterval} className='btn btn-success'>interval</button>
                  </div>
                  <div className="col-md-3">
                    <button onClick={this.deleteBtn} className='btn btn-danger'>delete</button>
                  </div>
                </div>
                <div className="row mt-5">
                  {
                    intervalarr.map((item,index)=> {
                      return <div>
                        <h2>{item}</h2>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default App;
