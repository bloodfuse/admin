import { faker as fk } from "@faker-js/faker";
import { states as st, telecom as tl } from "./misc";

export const genData = () => {
  let result = [];
  const rand = Math.floor(Math.random() * 101);
  if (rand !== 0) {
    for (let i = 0; i <= rand; i++) {
      const j = Math.floor(Math.random() * 2);
      const b = Math.floor(Math.random() * 6);
      const k = Math.floor(Math.random() * 2);
      const res = {
        uid: fk.datatype.uuid(),
        name: fk.name.fullName(),
        recipient: fk.name.fullName(),
        time:fk.datatype.datetime(),
        date: j % 2 === 0 ? fk.date.future() : fk.date.past(),
        donor: fk.name.fullName(),
        type:
          b === 0
            ? "AB"
            : b === 1
            ? "AB+"
            : b === 2
            ? "AB-"
            : b === 3
            ? "O"
            : b === 4
            ? "O-"
            : b === 5
            ? "O"
            : "",
        status:
          j % 2 !== 0 ? (k % 2 === 0 ? "Completed" : "Canceled") : "Pending",
      };
      result.push(res);
    }
  }
  return result;
};

export const genChartData = () => {
  let result = [];
  for (let i = 1; i <= 4; i++) {
    const j = Math.floor(Math.random() * 2);
    const k = Math.floor(Math.random() * 2);
    const res = {
      title:
        i === 1 ? "Visitors" : i === 2 ? "Donations" : i > 2 ? "Requests" : "",
      color: fk.color.rgb({ casing: "upper", format: "hex" }),
      percentUp:
        j % 2 === 0
          ? fk.datatype.number({ min: 1, max: 100 })
          : fk.datatype.number({ min: 1, max: 100, precision: 0.01 }),
      percentDown:
        k % 2 === 0
          ? fk.datatype.number({ min: 1, max: 100 })
          : fk.datatype.number({ min: 1, max: 100, precision: 0.01 }),
      percentage: fk.datatype.number({ min: 1, max: 100 }),
      visitors: fk.datatype.number({ min: 1, max: 9999 }),
    };
    result.push(res);
  }
  return result;
};

export const genDonors = () => {
  let result = [];
  const rand = Math.floor(Math.random() * 101);
  if (rand !== 0) {
    for (let i = 0; i <= rand; i++) {
      const j = Math.floor(Math.random() * 2);
      const k = Math.floor(Math.random() * tl.length);
      const s = Math.floor(Math.random() * st.length);
      const res = {
        uid: fk.datatype.uuid(),
        image: fk.image.avatar(),
        name: fk.name.fullName(),
        gender: j % 2 === 0 ? "male" : "female",
        location: st[s],
        phnNumb: fk.phone.number(
          `${k < 4 ? tl[k] + "######" : tl[k] + "#######"}`
        ),
      };
      result.push(res);
    }
  }
  return result;
};

export const genRequests = () => {
  let result = [];
  const rand = Math.floor(Math.random() * 101);
  if (rand !== 0) {
    for (let i = 0; i <= rand; i++) {
      const j = Math.floor(Math.random() * 6);
      const k = Math.floor(Math.random() * 2);
      const res = {
        img: fk.image.avatar(),
        name: fk.name.fullName(),
        type:
          j === 0
            ? "AB"
            : j === 1
            ? "AB+"
            : j === 2
            ? "AB-"
            : j === 3
            ? "O"
            : j === 4
            ? "O-"
            : j === 5
            ? "O"
            : "",
        gender: k % 2 === 0 ? "male" : "female",
        age: fk.datatype.number({ min: 20, max: 45 }),
        hospital: `${fk.company.name()} Hospital`,
        time: fk.datatype.datetime(),
      };
      result.push(res);
    }
  }
  return result;
};

export const genBarValues = () => {
  let result;
  let One = [];
  let Two = [];
  for (let i = 1; i <= 7; i++) {
    let numb = Math.floor(Math.random() * 100000) + 1000;
    One.push(numb);
    numb = Math.floor(Math.random() * 100000) + 1000;
    Two.push(numb);
  }
  result = { One, Two };
  return result;
};


export const genTransaction = () => {
    let result = [];
  const rand = Math.floor(Math.random() * 101);
  if (rand !== 0) {
    for (let i = 0; i <= rand; i++) {
      const j = Math.floor(Math.random() * 2);
      const k = Math.floor(Math.random() * 2);
      const res = {
        id: fk.datatype.uuid(),
        name: fk.name.fullName(),
        amount: fk.finance.amount(),
        hospital: fk.company.name(),
        Address: fk.finance.bitcoinAddress(),
        Receiver: fk.name.fullName(),
        ReceiverAddress: fk.finance.litecoinAddress(),
        status:
          j % 2 !== 0 ? (k % 2 === 0 ? "Completed" : "Canceled") : "Pending",
      };
      result.push(res);

      
      
    }
  }

  return result;
}