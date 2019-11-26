import React, {Component} from 'react';


class MultipleSelect extends Component {



    render(){
        return (
            < div className="multiple-wrapper " >
                <div class="row">
                    <div class="col-md-4 sel mar-tp">
                        <h4>Available Options</h4>
                        <select name="from[]" id="undo_redo" class="form-control" size="10" multiple="multiple">
                            <option value="1">Pizza</option>
                            <option value="2">Burger</option>
                            <option value="3">Chicken Pasta</option>
                            <option value="4">Grilled sandwich</option>
                        </select>
                    </div>

                    <div class="col-md-4 sel">

                        <button type="button" id="undo_redo_rightSelected" class="btn btn-default btn-block white-bt">Add to cart<i class="fa fa-chevron-right"></i></button>
                        <button type="button" id="undo_redo_leftSelected" class="btn btn-default btn-block white-bt "><i class="fa fa-chevron-left"></i>Remove from cart</button>

                    </div>

                    <div class="col-md-4 mar-tp">
                        <select name="to[]" id="undo_redo_to" class="form-control" size="10" multiple="multiple"></select>
                    </div>
                </div>
            </div>

        );
    }
}

export default MultipleSelect;
