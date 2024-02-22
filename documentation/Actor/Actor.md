# Actor

---

> Actor是遊戲中角色的最基礎class，可供玩家操作，撰寫遊戲邏輯。

## Method

---

### public

+ Actor:begin(): void
   > 當遊戲開始前會被引擎呼叫。

+ Actor:getComponent(component: ComponentType): ComponentType
  > 得到Actor的Component，如果Actor本身沒有該Component，則會throw Error。

  **Parameters** 
  + component: [ComponentType](./documentation.html?path=Component-Component)
  欲獲得的Component
 
  **Return**
  + Component

  ```lua
   local x = 0
   local transformComponent = Actor:getComponent(TransformComponent)
  ```

+ Actor:update(deltaTime: number): void
  > 每幀由引擎呼叫的角色更新函式。

  **Parameters**
  + deltaTime: number
  
