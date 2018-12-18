## 要素の存在確認

    const wrapper = shallow(<Component />);
    const pElement = wrapper.find('p').at(0);
    expect(pElement).toHaveLength(1);

## 要素の text 確認

    const wrapper = shallow(<Component />);
    const pElement = wrapper.find('p').at(0);
    expect(pElement.text()).toBe('home');

## 関数実行後の state を確認

    const instance = wrapper.instance();
    instance.successControle(true, 'BlankText');
    expect(wrapper.state('success')).toBeTruthy();

## 関数実行後の state を確認 2

    const error = 'blank';
    const instance = wrapper.instance();
    instance.successControle(true, 'BlankText');
    expect(wrapper.state('error')).toEqual(error);
    // state.error = 'blank'ならtrue;

## 関数内の関数の実行を確認

    const Wrapper = shallow(<Component />) as any;
    const instance = Wrapper.instance();
    const clickMock = jest.fn();
    instance.changeInput = clickMock;
    Wrapper.find('button').simulate('click');
    expect(clickMock).toHaveBeenCalled();

## 関数内の関数の実行を確認 2

    const Wrapper = shallow(<Component />) as any;
    const instance = Wrapper.instance();
    const spy = jest.spyOn(instance, 'changeInput');
    instance.changeInput(e);
    expect(spy).toHaveBeenCalled();
