import React from 'react';

class UserAdd extends React.Component{
    constructor(){
        super();
        this.state = {
            form: {
                name: {
                    valid: false,
                    value: '',
                    error: ''
                },
                age: {
                    valid: false,
                    value: '',
                    error: ''
                },
                gender: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        };
    }

    UNSAFE_componentWillMount(){
        console.log('componentWillMount');
    }

    handleValueChange(field, value, type='string'){
        if(type === 'number'){
            value = +value;
        }

        const {form} = this.state;

        const newFieldObj = {value, valid: true, error: ''};

        this.setState({
            [field]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(JSON.stringify(this.state));
        const {name, age, gender} = this.state;

        fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify({name, age, gender}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>res.json()).then((res)=>{
            console.log(res);
            if(res.id){
                console.log('添加用户成功');
                this.setState({
                    name: '',
                    age: 0,
                    gender: ''
                })
            }else{
                console.log('添加失败')
            }
        }).catch((err)=>console.lo(err));
    }

    render(){
        const {name, age, gender} = this.state;
        return(
            <div>
                <header><h1>添加用户</h1></header>
                <main>
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <p>
                            <label htmlFor="">用户名：</label>
                            <input type="text" value={name} onChange={(e)=>this.handleValueChange('name', e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="">年龄：</label>
                            <input type="number" value={age || ''} onChange={(e)=>this.handleValueChange('age', e.target.value, 'number')} />
                        </p>
                        <p>
                            <label htmlFor="">性别：</label>
                            <select name="" id="" value={gender} onChange={(e)=>this.handleValueChange('gender', e.target.value)}>
                                <option value="">请选择</option>
                                <option value="男">男</option>
                                <option value="女">女</option>
                            </select>
                        </p>
                        <p><input type="submit" value="提交"/></p>
                    </form>
                </main>
            </div>
        )
    }
}

export default UserAdd;