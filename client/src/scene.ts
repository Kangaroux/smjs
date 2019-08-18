export interface Scene {
    /**
     * Redraws the scene with the given delta time in milliseconds
     */
    update(deltaTime: number): void;
}