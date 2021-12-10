import './RandomCountUp.css';
import React from 'react';

// React 컴포넌트 타입
// 1. 함수 : tihs 사용 X
// 2. 클래스(웹 표준 컴포넌트 기술 사양과 흡사) : this 사용

// 클래스 컴포넌트 (스테이트풀)
export class RandomCountUpClass extends React.Component {
  constructor(props) {
    super(props);
  }

  getCompletStyle() {
    return !this.props.isComplete ? null : { animationName: 'none' };
  }

  render() {
    // this.props
    return (
      <div className="randomCountUp">
        <output style={this.getCompletStyle()}>{this.props.count}</output>
      </div>
    );
  }
}

// 함수 컴포넌트 (스테이트리스 컴포넌트)
export const RandomCountUp = ({ count, isComplete }) => {
  const completeStyle = !isComplete ? null : { animationName: 'none' };
  return (
    <div className="randomCountUp" data-testid="container">
      <output style={completeStyle}>{count}</output>
    </div>
  );
};
