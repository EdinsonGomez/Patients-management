import { minDoctoresRequeridos } from './algorithm.js'
import {expect} from 'chai';

describe('Challenge: Minimum Doctors Required for Attention Hours', () => {
  it('Test Case 1: Large Number of Doctors and Attention Hours', () => {
    const doctorsCapacities1 = Array.from({ length: 100 }, (_, i) => i + 1);
    const attentionHours1 = 500;
    const expectedDoctors1 = 5;

    const actualDoctors1 = minDoctoresRequeridos(doctorsCapacities1, attentionHours1);
    expect(actualDoctors1).to.equal(expectedDoctors1);
  });

  it('Test Case 2: Large Attention Hours with Few Doctors', () => {
    const doctorsCapacities2 = [10, 20, 30];
    const attentionHours2 = 1000;
    const expectedDoctors2 = 34;

    const actualDoctors2 = minDoctoresRequeridos(doctorsCapacities2, attentionHours2);
    expect(actualDoctors2).to.equal(expectedDoctors2);
  });

  it('Test Case 3: Large Number of Doctors with Specific Capacities', () => {
    const doctorsCapacities3 = [7, 14, 21, 35, 42, 56, 63, 77, 84, 98, 105];
    const attentionHours3 = 420;
    const expectedDoctors3 = 4;

    const actualDoctors3 = minDoctoresRequeridos(doctorsCapacities3, attentionHours3);
    expect(actualDoctors3).to.equal(expectedDoctors3);
  });

  it('Test Case 4: Hundredths of Doctors and 10ths of Thousands of Attention Hours', () => {
    const doctorsCapacities4 = Array.from({ length: 100 }, (_, i) => (i + 1) * 100);
    const attentionHours4 = 75000;
    const expectedDoctors4 = 8;

    const actualDoctors4 = minDoctoresRequeridos(doctorsCapacities4, attentionHours4);
    expect(actualDoctors4).to.equal(expectedDoctors4);
  });

  it('Test Case 5: Varying Doctor Capacities and Attention Hours', () => {
    const doctorsCapacities5 = [50, 100, 150, 200, 250, 300];
    const attentionHours5 = 600;
    const expectedDoctors5 = 2;

    const actualDoctors5 = minDoctoresRequeridos(doctorsCapacities5, attentionHours5);
    expect(actualDoctors5).to.equal(expectedDoctors5);
  });

  it('Test Case 6: Large Attention Hours with Small Doctor Capacities', () => {
    const doctorsCapacities6 = [1, 2, 3];
    const attentionHours6 = 10000;
    const expectedDoctors6 = 3334;

    const actualDoctors6 = minDoctoresRequeridos(doctorsCapacities6, attentionHours6);
    expect(actualDoctors6).to.equal(expectedDoctors6);
  });

  it('Test Case 7: Few Doctors with Large Capacities and Attention Hours', () => {
    const doctorsCapacities7 = [100, 200, 300, 400];
    const attentionHours7 = 100000;
    const expectedDoctors7 = 250;

    const actualDoctors7 = minDoctoresRequeridos(doctorsCapacities7, attentionHours7);
    expect(actualDoctors7).to.equal(expectedDoctors7);
  });

  it('Test Case 8: Large Number of Doctors and Attention Hours (Equal Capacities)', () => {
    const doctorsCapacities8 = Array.from({ length: 1000 }, () => 10);
    const attentionHours8 = 10000;
    const expectedDoctors8 = 1000;

    const actualDoctors8 = minDoctoresRequeridos(doctorsCapacities8, attentionHours8);
    expect(actualDoctors8).to.equal(expectedDoctors8);
  });

  it('Test Case 9: No Doctors Required (Zero Attention Hours)', () => {
    const doctorsCapacities9 = [10, 20, 30];
    const attentionHours9 = 0;
    const expectedDoctors9 = 0;

    const actualDoctors9 = minDoctoresRequeridos(doctorsCapacities9, attentionHours9);
    expect(actualDoctors9).to.equal(expectedDoctors9);
  });

  it('Test Case 10: Large Number of Doctors and Attention Hours (Ascending Capacities)', () => {
    const doctorsCapacities10 = Array.from({ length: 100 }, (_, i) => i *17);
    const attentionHours10 = 18632;
    const expectedDoctors10 = 12;

    const actualDoctors10 = minDoctoresRequeridos(doctorsCapacities10, attentionHours10);
    expect(actualDoctors10).to.equal(expectedDoctors10);
  }); 
  it('Test Case 11: Large Number of Doctors and Attention Hours (Ascending Capacities)', () => {
    const doctorsCapacities10 = Array.from({ length: 100 }, (_, i) => i *17);
    const attentionHours10 = 10000;
    const expectedDoctors10 = -1;

    const actualDoctors10 = minDoctoresRequeridos(doctorsCapacities10, attentionHours10);
    expect(actualDoctors10).to.equal(expectedDoctors10);
  }); 
});
