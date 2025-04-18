// src/components/pages/Trade/BuySellForm.tsx
'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthActions } from '@/hooks/useAuth';
import { useAppDispatch } from '@/hooks';
import { executeTrade } from '@/store/slices/tradeSlice';
import { ButtonGroup, Button, Input, Select } from '@/components/ui';

const TradeSchema = Yup.object().shape({
  amount: Yup.number()
    .min(0.0001, 'Amount too small')
    .required('Required'),
  price: Yup.number().min(0.0001, 'Price too small').required('Required'),
});

export const BuySellForm = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const { user } = useAuthActions();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      amount: '',
      price: '',
      type: 'market',
    },
    validationSchema: TradeSchema,
    onSubmit: async (values) => {
      if (!user) return;
      
      const tradeData = {
        userId: user.uid,
        symbol: 'BTCUSDT',
        amount: parseFloat(values.amount),
        price: parseFloat(values.price),
        type: values.type,
        side: activeTab,
        timestamp: new Date().toISOString(),
      };

      await dispatch(executeTrade(tradeData));
      formik.resetForm();
    },
  });

  return (
    <div className="trade-form">
      <ButtonGroup>
        <Button
          variant={activeTab === 'buy' ? 'primary' : 'secondary'}
          onClick={() => setActiveTab('buy')}
        >
          Buy
        </Button>
        <Button
          variant={activeTab === 'sell' ? 'primary' : 'secondary'}
          onClick={() => setActiveTab('sell')}
        >
          Sell
        </Button>
      </ButtonGroup>

      <form onSubmit={formik.handleSubmit}>
        <Select
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          options={[
            { value: 'market', label: 'Market' },
            { value: 'limit', label: 'Limit' },
          ]}
        />

        <Input
          type="number"
          name="amount"
          label="Amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && formik.errors.amount}
        />

        {formik.values.type === 'limit' && (
          <Input
            type="number"
            name="price"
            label="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && formik.errors.price}
          />
        )}

        <Button type="submit" variant="primary" disabled={!formik.isValid || formik.isSubmitting}>
          {activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
        </Button>
      </form>
    </div>
  );
};