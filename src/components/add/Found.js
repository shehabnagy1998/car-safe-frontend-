import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadColors, loadBrands, addFound } from '../../store/actions/actions'

const FoundAdd = ({ colors, brands, colorsLoad, brandsLoad, foundAdd, loading }) => {

    useEffect(_ => {
        document.title = `Car Safe - Add Found`;
        colorsLoad();
        brandsLoad();
    }, []);

    const [fields, setFields] = useState({
        lic_pla_num: '',
        lic_pla_let: '',
        date: '',
        phone: '',
        color: '',
        brand: ''
    });

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        foundAdd(fields)
    }

    return (
        <article className="add">
            <section className="container">
                <h2 className="title"><span>Add found</span> car report</h2>

                <form onSubmit={handleSubmit}>
                    <section className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            License Plate:
                        </label>
                        <div className="col-6 col-sm-5">
                            <input className="form-control"
                                placeholder="letters"
                                pattern="^[a-zA-Z]{3}$"
                                maxLength="3" onChange={handleChange}
                                id="lic_pla_let" type="text" required />
                        </div>
                        <div className="col-6 col-sm-5">
                            <input className="form-control"
                                placeholder="numbers" max="9999"
                                onChange={handleChange} id="lic_pla_num"
                                type="number" required />
                        </div>
                    </section>
                    <section className="form-group row">
                        <label className="col-sm-2 col-form-label">Date:</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                placeholder="when you found the car"
                                onChange={handleChange} id="date" type="date" required />
                        </div>
                    </section>
                    <section className="form-group row">
                        <label className="col-sm-2 col-form-label">Phone:</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                placeholder="number we can contact with?"
                                onChange={handleChange} id="phone"
                                type="number" required />
                        </div>
                    </section>
                    <section className="form-group row">
                        <label className="col-sm-2 col-form-label">Color:</label>
                        <div className="col-sm-10">
                            <select id="color" onChange={handleChange}
                                className="custom-select" required >
                                <option value="">car color...</option>
                                {colors.length >= 1 && colors.map(color => {
                                    return (
                                        <option key={color.colorID}
                                            value={color.color_name}
                                            style={{ background: color.color_name }}>
                                            {color.color_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>
                    <section className="form-group row">
                        <label className="col-sm-2 col-form-label">Brand:</label>
                        <div className="col-sm-10">
                            <select id="brand" onChange={handleChange}
                                className="custom-select" required >
                                <option value="">car brand...</option>
                                {brands.length >= 1 && brands.map(brand => {
                                    return (
                                        <option key={brand.brandID}
                                            value={brand.brand_name}>
                                            {brand.brand_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>
                    <section className="form-group text-center mt-4">
                        <button className="btn btn-primary btn-lg" disabled={loading}>
                            {loading ? <span className="spinner-border text-light"></span> : 'Submit'}
                        </button>
                    </section>
                </form>

            </section>
        </article >
    )
}

const mapStateToProps = (state) => {
    return {
        brands: state.brands,
        colors: state.colors,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        colorsLoad: _ => { dispatch(loadColors()) },
        brandsLoad: _ => { dispatch(loadBrands()) },
        foundAdd: report => { dispatch(addFound(report)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundAdd)
