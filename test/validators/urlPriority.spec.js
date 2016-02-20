import sut from '../../src/validators/urlPriorityValidator';
import test from 'ava';

test('validate - case is null', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: null
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is empty', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: ''
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is undefined', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: undefined
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is 0.0', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: 0.0
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is 0.1', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: 0.1
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is 0.9', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: 0.9
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is 1.0', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    priority: 1.0
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is 1.1', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Priority value 1.1 is not valid,should be between 0 and 1']
  };
  const testCase = {
    priority: 1.1
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});


test('validate - case is -0.1', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Priority value -0.1 is not valid,should be between 0 and 1']
  };
  const testCase = {
    priority: -0.1
  };

  // Act
  const result = sut.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});