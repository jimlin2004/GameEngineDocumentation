# Actor

---

> Actor是遊戲中角色的最基礎class，可供玩家操作，撰寫遊戲邏輯。

## Method

+ begin()
   + param void
   > 當遊戲開始前會被呼叫。

+ getComponent(component)
  + param component [ComponentType](./documentation.html?path=Component-Component)
  + return component
  > 得到Actor的Component，如果Actor本身沒有該Component，則會throw Error。
  ```lua
   local x = 0
   local transformComponent = Actor:getComponent(TransformComponent)
  ```

+ update(deltaTime)
  + param deltaTime number
  > 每幀呼叫。
