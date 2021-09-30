import {
  isEmptyObject,
  getFormattedDate,
  getPermissionStatus,
} from '../../../src/shared/helper';
import {request} from '../../../__mocks__/Permissions.mock';

describe('Helper file', () => {
  it('should check empty object', () => {
    const obj = {};
    expect(isEmptyObject(obj)).toBe(true);
  });

  it('should check empty object if object not passed', () => {
    expect(isEmptyObject()).toBe(true);
  });

  it('should return formatted date if date or month digit is less than 10', () => {
    const date = new Date('2021-1-9');
    const formattedDate = getFormattedDate(date);
    expect(formattedDate).toBe('2021-09-01');
  });

  it('should return formatted date if date or month digit is greater than 10 ', () => {
    const date = new Date('2021-11-10');
    const formattedDate = getFormattedDate(date);
    expect(formattedDate).toBe('2021-10-11');
  });

  it('should return current date as formaated date if date is not passed', () => {
    const date = new Date();
    const formattedDate = getFormattedDate(date);
    expect(getFormattedDate()).toBe(formattedDate);
  });

  it('should check for permission', () => {
    getPermissionStatus().then(res => {
      expect(res).toBe(false);
    });
  });

  it('should check if permission granted', async () => {
    // request.mockResolvedValueOnce('granted');
    // getPermissionStatus().then(res => {
    //   console.log('RESPONSE :', res);
    //   expect(res).toBe(false);
    // });

    let error;
    request.mockResolvedValueOnce('granted');
    try {
      getPermissionStatus().then(res => {
        console.log('RESPONSE :', res);
        expect(res).toBe(false);
      });
    } catch (caughtError) {
      console.log('RESPONSE :', caughtError);
      error = caughtError;
    }
    expect(error).toBeTruthy();
  });
});
