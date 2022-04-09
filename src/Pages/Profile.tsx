import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Selector,
  Slider,
  Stepper,
  Switch
} from "antd-mobile";
import dayjs from "dayjs";

export default () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>
    });
  };

  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <>
      <Form
        name="form"
        onFinish={onFinish}
        footer={
          <Button block type="submit" color="primary" size="large">
            Submit
          </Button>
        }
      >
        <Form.Header>
          <h1>Profile</h1>
        </Form.Header>
        <Form.Item name="name" label="name" rules={[{ required: true }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item name="phone" label="Phone number" help="Phone number">
          <Input placeholder="Enter your phone number..." />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Birthday"
          trigger="onConfirm"
          onClick={() => {
            setPickerVisible(true);
          }}
        >
          <DatePicker
            visible={pickerVisible}
            onClose={() => {
              setPickerVisible(false);
            }}
          >
            {(value) =>
              value ? dayjs(value).format("YYYY-MM-DD") : "Select date"
            }
          </DatePicker>
        </Form.Item>
        <Form.Item name="services" label="Services">
          <Selector
            columns={3}
            multiple
            options={[
              { label: "Hair cut", value: "haircut" },
              { label: "Shave", value: "shave" },
              { label: "Trim", value: "trim" },
              { label: "Hair dye", value: "hairdye" },
              { label: "Hair wash", value: "hairwash" },
              { label: "Hair Straighten", value: "hairstraighten" }
            ]}
          />
        </Form.Item>
        <Form.Item name="slider-demo" label="Slider">
          <Slider ticks step={10} />
        </Form.Item>
        <Form.Item
          initialValue={0}
          rules={[
            {
              max: 5,
              min: 1,
              type: "number"
            }
          ]}
          name="stepper-demo"
          label="Stepper"
        >
          <Stepper />
        </Form.Item>
      </Form>
    </>
  );
};
