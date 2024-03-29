import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import ProductService from '~/services/ProductService';

export interface ProductProps {
    id: number;
    name: string;
    description: string;
    info_detail: Array<any>;
    image: Array<any>;
    slug: string;
    sold: number;
    status: number;
}

export interface ProductState {
    value: Array<ProductProps>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
    value: [],
    status: 'idle',
};

export const fetchProductAsync = createAsyncThunk('product/fetchProducts', async () => {
    const response = await ProductService.getAllProduct();
    return response.data;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log('action.payload: ', action.payload);
                state.value = action.payload;
            })
            .addCase(fetchProductAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const getProducts = (state: RootState) => state.product.value;

// export const incrementIfOdd =
//     (amount: number): AppThunk =>
//     (dispatch, getState) => {
//         const currentValue = getProducts(getState());
//         if (currentValue % 2 === 1) {
//             dispatch(incrementByAmount(amount));
//         }
//     };

export default productSlice.reducer;
