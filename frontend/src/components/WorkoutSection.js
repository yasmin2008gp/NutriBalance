import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Zap, Dumbbell } from "lucide-react";
import { workouts } from "../data/mockData";

const WorkoutSection = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const WorkoutModal = ({ workout, onClose }) => {
    if (!workout) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="heading-2">{workout.name}</h3>
              <Button variant="ghost" onClick={onClose} className="text-2xl">×</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-brand-dark" />
                <p className="body-small">{workout.duration}</p>
              </div>
              <div className="text-center">
                <Dumbbell className="w-6 h-6 mx-auto mb-2 text-brand-dark" />
                <p className="body-small">{workout.equipment}</p>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-2 text-brand-dark" />
                <p className="body-small">{workout.level}</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 mx-auto mb-2 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">🔥</span>
                </div>
                <p className="body-small">{workout.calories} kcal</p>
              </div>
            </div>

            <div>
              <h4 className="heading-3 mb-4">Exercícios:</h4>
              <div className="space-y-4">
                {workout.exercises.map((exercise, idx) => (
                  <div key={idx} className="bg-bg-card p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="body-medium font-semibold">{exercise.name}</h5>
                      <Badge variant="outline">{exercise.sets} séries</Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>Repetições: {exercise.reps}</span>
                      <span>Descanso: {exercise.rest}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-brand-primary bg-opacity-10 rounded-lg">
              <h4 className="heading-3 mb-2">Dicas:</h4>
              <ul className="space-y-1 body-small">
                <li>• Mantenha a forma correta em todos os exercícios</li>
                <li>• Use pesos adequados ao seu nível</li>
                <li>• Hidrate-se durante o treino</li>
                <li>• Respeite os intervalos de descanso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="treinos" className="py-16 bg-bg-subtle">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="display-medium mb-4">
            Treinos Complementares
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Combine sua nutrição equilibrada com treinos eficazes. 
            Exercícios planejados para maximizar os benefícios dos macronutrientes que você consome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <Card 
              key={workout.id} 
              className="network-card cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              onClick={() => setSelectedWorkout(workout)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="network-card-title">
                    {workout.name}
                  </CardTitle>
                  <Badge className="bg-brand-primary text-white">
                    {workout.level}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-dark" />
                    <span className="body-medium">Duração: {workout.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5 text-brand-dark" />
                    <span className="body-medium">Equipamento: {workout.equipment}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-brand-dark" />
                    <span className="body-medium">Queima: ~{workout.calories} kcal</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="heading-3 mb-3">Exercícios principais:</h4>
                  <ul className="space-y-2">
                    {workout.exercises.slice(0, 3).map((exercise, idx) => (
                      <li key={idx} className="body-small flex items-center">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        {exercise.name}
                      </li>
                    ))}
                    {workout.exercises.length > 3 && (
                      <li className="body-small text-gray-600">
                        + {workout.exercises.length - 3} exercícios adicionais
                      </li>
                    )}
                  </ul>
                </div>

                <Button className="btn-secondary w-full">
                  Ver Treino Completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="body-large mb-6">
            💡 <strong>Dica Nutricional:</strong> Consuma proteínas dentro de 30-60 minutos após o treino 
            para otimizar a recuperação muscular.
          </p>
          <Button className="btn-primary">
            Explorar Mais Treinos
          </Button>
        </div>
      </div>

      <WorkoutModal workout={selectedWorkout} onClose={() => setSelectedWorkout(null)} />
    </section>
  );
};

export default WorkoutSection;