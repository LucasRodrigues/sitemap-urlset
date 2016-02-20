import UrlChangeFreqValidator from '../../src/validators/urlChangeFreqValidator';
import test from 'ava';

test('validate - case is null', t => {
  // Arrange
  const expectedResult = {
    status: true
  };

  // Act
  const result = UrlChangeFreqValidator.validate(null);

  // Assert
  t.same(expectedResult,result);
});