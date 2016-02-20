import sut from '../../src/validators/urlLocValidator';
import test from 'ava';

test('validate - case is null', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Loc is not defined, this property is required']
  };
  const testCase = {
    loc: null
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is empty', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Loc is not defined, this property is required']
  };
  const testCase = {
    loc: ''
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is http://teste.com.br', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    loc: 'http://teste.com.br'
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case url length 2047', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    loc: 'a'.repeat(2047)
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case url length 2048', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    loc: 'a'.repeat(2048)
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case url length 2049', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Loc size limit is 2048']
  };
  const testCase = {
    loc: 'a'.repeat(2049)
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});