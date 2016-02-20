import UrlChangeFreqValidator from '../../src/validators/urlChangeFreqValidator';
import test from 'ava';

test('validate - case is null', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: null
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is empty', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: ''
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is undefined', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: undefined
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - always', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'always'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - AlwAyS', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'AlwAyS'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - hourly', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'hourly'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - daily', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'daily'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - weekly', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'weekly'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - monthly', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'monthly'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - anual', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'anual'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is valid option - never', t => {
  // Arrange
  const expectedResult = {
    status: true
  };
  const testCase = {
    changeFreq: 'never'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is not valid option - bla', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Value bla is different from accepts always,hourly,daily,weekly,monthly,anual,never']
  };
  const testCase = {
    changeFreq: 'bla'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});

test('validate - case is not valid option - fail', t => {
  // Arrange
  const expectedResult = {
    status: false,
    messages: ['Value fail is different from accepts always,hourly,daily,weekly,monthly,anual,never']
  };
  const testCase = {
    changeFreq: 'fail'
  };

  // Act
  const result = UrlChangeFreqValidator.validate(testCase);

  // Assert
  t.same(expectedResult,result);
});