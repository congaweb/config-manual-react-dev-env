import { transformText } from './transformText';

test('transformText 유틸리티', () => {
  expect(transformText(`Jest is Test Runner`)).toBe('Jest is Test Runner');
  expect(transformText(`Jest is Test Runner`)).toBe('Jest is Test Runner');
  expect(transformText(`Jest is Test Runner`)).toBe('Jest is Test Runner');
  // expect(transformText(`Jest is Test\n     Runner`)).toBe(
  //   'Jest is Test     Runner'
  // );
});
