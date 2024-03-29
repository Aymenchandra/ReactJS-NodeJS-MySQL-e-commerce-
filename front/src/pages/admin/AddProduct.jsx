import React, { Component } from 'react';
import axios from 'axios';

class Addpr extends Component {
    
    constructor(props) {
        super(props);
        var file = '';
        this.state = {
            prname: '',
            prcategory: '',
            prdesc: '',
            imageUrl: '',
            prprice: 0,
            formErrors: {
                prname: "",
                prcategory: "",
                prdesc: "",
                imageUrl: '',
                prprice: "",
            },
        };
    }

    handleImageChange = (event) => {
        event.preventDefault();
        this.file = event.target.files[0];
        
        this.setState({
            imageUrl:event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData()
        form.append('file', this.file);
        form.append('upload_preset', 'lkffra40');
        
        axios.post("https://api.cloudinary.com/v1_1/dcscoeeoo/image/upload",form)
        .then(async (result)=>{
            const product = {
                title: this.state.prname,
                imageUrl: result.data.secure_url,
                Price: this.state.prprice,
                Desc: this.state.prdesc,
                categoryId: this.state.prcategory
            }
            await axios({
                method: 'post',
                url: 'http://localhost:4000/addProduct',
                data: product,
                'Content-Type': 'application/json'
            })
            this.setState({
                prname: '',
                prcategory: '',
                prdesc: '',
                prprice: '',
                imageUrl:''
            });
        })
        .catch((error) => {
            console.error("Error uploading image:", error);
        });
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "prname":
                formErrors.prname =
                    value.length <= 0 ? "Field Required" : "";
                break;
            case "prcategory":
                formErrors.prcategory =
                    value === "selectcard" ? "Please Select A Valid Product Category" : "";
                break;
            case "prdesc":
                formErrors.prdesc =
                    value.length <= 0 ? "Field Required" : "";
                break;
            case "imageUrl":
                formErrors.prdesc =
                    value.length <= 0 ? "Field Required" : "";
                break;
            case "prprice":
                formErrors.prprice =
                    value.length <= 0 ? "Field Required" : "";
                break;

            default:
                break;
        }

        this.setState({ formErrors, [name]: value });
    };

    render() {
        const { formErrors } = this.state;
        return (
            <div className="adwrapper" >
                <div className="form-wrapper">
                    <h1>Add Product</h1>
                    <form onSubmit={this.handleSubmit} noValidate>

                        <div className="prname">
                            <label htmlFor="prname">Product Name</label>
                            <input
                                className={formErrors.prname.length > 0 ? "error" : null}
                                placeholder="Product Name"
                                value={this.state.prname}
                                type="text"
                                name="prname"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.prname.length > 0 && (
                                <span className="errorMessage">{formErrors.prname}</span>
                            )}
                        </div>
                        <div className="prcategory">
                            <label htmlFor="prcategory">Product Category</label>
                            <select
                                noValidate
                                name="prcategory"
                                onChange={this.handleChange}
                            >
                                <option value="">Product Category</option>
                                <option value="1">Electronics</option>
                                <option value="2">Games</option>
                                <option value="3">Men's Wear</option>
                                <option value="4">Books</option>
                                <option value="5">Kids's Wear</option>
                            </select>
                            {formErrors.prcategory.length > 0 && (
                                <span className="errorMessage">{formErrors.prcategory}</span>
                            )}
                        </div>
                        <div className="prdesc">
                            <label htmlFor="prdesc">Product Description</label>
                            <input
                                className={formErrors.prdesc.length > 0 ? "error" : null}
                                placeholder="Product Description"
                                type="text"
                                value={this.state.prdesc}
                                name="prdesc"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.prdesc.length > 0 && (
                                <span className="errorMessage">{formErrors.prdesc}</span>
                            )}
                        </div>
                        <div className="prprice">
                            <label htmlFor="prprice">Product Price</label>
                            <input
                                className={formErrors.prprice.length > 0 ? "error" : null}
                                placeholder="Product Price"
                                type="number"
                                value={this.state.prprice}
                                name="prprice"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.prprice.length > 0 && (
                                <span className="errorMessage">{formErrors.prprice}</span>
                            )}
                        </div>
                        <div className="prdesc">
                        <label htmlFor="imageUrl">Product Image</label>
                            <input
                                className={formErrors.imageUrl.length > 0 ? "error" : null}
                                placeholder="Product Image Url"
                                type="file"
                                value={this.state.imageUrl}
                                name="imageUrl"
                                noValidate
                                onChange={this.handleImageChange}
                            />
                            {formErrors.imageUrl.length > 0 && (
                                <span className="errorMessage">{formErrors.imageUrl}</span>
                            )}
                        </div>
                        
                        <div className="createAccount">
                            <button type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Addpr;
