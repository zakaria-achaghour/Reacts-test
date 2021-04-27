import React, { Component } from 'react'

 class AddContact extends Component {
     state= {
         name: '',
         phone: '',
         email: ''
        
        }
    render() {
        const { name , phone , email } = this.state;
        return (
            <div className="container mb-5">
               
                <div className="card">
                
                  <div className="card-body">
                    
                          <h4 className="card-title">Add Contact</h4>
                   
                  <form action="" method="post">
               <div className="row">
               
                   <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name"  value={name} />
                         </div>
                   </div>
                   <div className="col-md-12">
                       
                    <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" name="phone" id="phone" value={phone} />
                    </div>
                   </div>
                   <div className="col-md-12">
                   <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={email} />
                    </div>
                   </div>
                   <button type="submit" className="btn btn-success btn-sm">Add</button>
               </div>
                  
                </form>
                  </div>
                </div>
            </div>
        )
    }
}
export default  AddContact