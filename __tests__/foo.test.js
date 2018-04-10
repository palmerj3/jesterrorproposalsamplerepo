describe('foo', () => {
  it('should foo', () => {
    //throw new Error('foo failed');
    expect('foo').toEqual('foo');
    expect('foo').toEqual('bar');
  });
});
