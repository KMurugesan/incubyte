import { addString } from "./helpers";

describe('helper function addString', () => {
  it('empty string', () => {
    expect(addString('')).toEqual({ totalValue: "", errorMsg: '' });
  });

  it('simple string', () => {
    expect(addString('1,5')).toEqual({ totalValue: 6, errorMsg: '' });
  });

  it('input string with special chars', () => {
    expect(addString('1\n2,3')).toEqual({ totalValue: 6, errorMsg: '' });
  });
  
  it('input string with special & negative chars', () => {
    expect(addString('1\n2,-3')).toEqual({
      totalValue: 3, errorMsg: 'negative numbers not allowed -3' 
    });
  });

  it('input string with special & negative chars & value greater than 1000', () => {
    expect(addString('1\n2,-3,1002')).toEqual({
      totalValue: 3, errorMsg: 'negative numbers not allowed -3' 
    });
  });
  
  it('input string with special & negative chars & starting value greater than 1000', () => {
    expect(addString('1005(1\n2,-3,1002')).toEqual({
      totalValue: 3, errorMsg: 'negative numbers not allowed -3' 
    });
  });

  it('input string with special & negative values greater than 1000 & starting value greater than 1000', () => {
    expect(addString('1005(1\n2,-3,-1002')).toEqual({
      totalValue: 3, errorMsg: 'negative numbers not allowed -3,-1002' 
    });
  });

  it('Delimiters can be of any length', () => {
    expect(addString('//[***]\n1***2***3')).toEqual({
      totalValue: 6, errorMsg: '' 
    });
  });
  
  it('Allow multiple delimiters like this', () => {
    expect(addString('//[*][%]\n1*2%3')).toEqual({
      totalValue: 6, errorMsg: '' 
    });
  });
});
